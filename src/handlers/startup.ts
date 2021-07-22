import mongoose from "mongoose";
import farms from '../config/jobs/farm.json';
import config from "../config/db.json";

export default () => {
    if(config.username === "") {
        mongoose.connect(`mongodb://${ config.server }:${ config.port }/${ config.database }`, {useNewUrlParser: true, useUnifiedTopology: true});
    } else {
        mongoose.connect(`mongodb://${ config.username }:${ config.password }@${ config.server }:${ config.port }/${ config.database }`, {useNewUrlParser: true, useUnifiedTopology: true});
    }


    mongoose.connection.once("open", () => {
        console.log("Database connection established!");
    }).on("error", (ex) => {
        console.log("error: " + ex);
    });

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

