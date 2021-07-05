import farms from '../config/jobs/farm.json';

export default () => {
    mp.world.weather = RageEnums.Weather.XMAS;
    mp.blips.new(60, new mp.Vector3(446, -983, 0));

    farms.forEach(job => {
        job.locations.forEach(location => {
            mp.blips.new(job.blip, new mp.Vector3(location.x, location.y, 0), {
                name: job.name
            });

            let shape = mp.colshapes.newCircle(location.x, location.y, location.radius);
            shape.setVariable("info", { name: job.name, illegal: job.illegal });
        });
    });
}

