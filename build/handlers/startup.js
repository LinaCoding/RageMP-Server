"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var farm_json_1 = __importDefault(require("../config/jobs/farm.json"));
exports.default = (function () {
    mp.world.weather = "XMAS" /* XMAS */;
    mp.blips.new(60, new mp.Vector3(446, -983, 0));
    farm_json_1.default.forEach(function (job) {
        job.locations.forEach(function (location) {
            mp.blips.new(job.blip, new mp.Vector3(location.x, location.y, 0), {
                name: job.name
            });
            var shape = mp.colshapes.newCircle(location.x, location.y, location.radius);
            shape.setVariable("info", { name: job.name, illegal: job.illegal });
        });
    });
});
