import config from "../config/weather.json";

interface WeatherChance {
    weather: string;
    chance: number;
}

//Selects a random weather from a given list
function selectWeather(list : WeatherChance[]) {
    const random = Math.random();
    let tmp = 0;

    //Calculates the weather
    for(let i = 0; i < list.length; i++) {
        tmp += list[i].chance;
        if(tmp > random) {
            return config[config.findIndex(x => x.currentWeather === list[i].weather)];
        }
    }

    //If the given list is less then 100% chance
    return config[0];
}

//Gets a random number between the min and max value
function getRandom(min : number, max : number) {
    return Math.random() * (max - min) + min;
}


export default () => {
    //Set the weather at startup
    let currWeather = selectWeather(config.map(x => ({ weather: x.currentWeather, chance: x.initalChance })));
    mp.world.setWeatherTransition(currWeather.currentWeather);
    console.log(`Weather initialized with ${ currWeather.currentWeather }`);
    
    //Function to change the weather in an interval
    const changeWeather = () => {
        clearInterval(weatherInterval);
        
        //Replace the old weather with a new one and update the interval
        const newWeather = selectWeather(currWeather.nextWeather);
        const time = getRandom(newWeather.minTime, newWeather.maxTime);
        mp.world.setWeatherTransition(newWeather.currentWeather);
        currWeather = newWeather;
        console.log(`New weather: ${ currWeather.currentWeather }`);

        weatherInterval = setInterval(changeWeather, time * 1000);
    }

    //initialize the interval
    let weatherInterval = setInterval(changeWeather, getRandom(currWeather.minTime, currWeather.maxTime) * 1000);
}
