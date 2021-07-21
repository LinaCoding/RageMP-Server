import handleStartup from "./handlers/startup";
import dynamicWeather from "./handlers/dynamicWeather";

export default () => {
    mp.events.add("packagesLoaded", async () => {
        handleStartup();
        dynamicWeather();
    });
    
    mp.events.add(RageEnums.EventKey.PLAYER_ENTER_COLSHAPE, (player: PlayerMp, colshape: ColshapeMp) => {
        player.notify(`You entered ${colshape.data.info.name}`);
    });
    
    mp.events.add(RageEnums.EventKey.PLAYER_JOIN, async (player : PlayerMp) => {
        /*const user = await UserModel.findOne({ userName: player.name });
        
        if(user) {
            player.notify(`Wilkommen zurück ${player.name}!`);
        } else {
            const user = await UserModel.create({ userName: player.name, money: 100, level: 1 });
            player.notify(`Wilkommen ${player.name}`);
        }*/
    });
}
