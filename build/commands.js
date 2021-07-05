"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicleHashes = require("./vehicles.json");
exports.default = (function () {
    mp.events.addCommand("pos", function (player, text) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        player.notify("X=" + player.position.x + " Y=" + player.position.y + " Z=" + player.position.z);
    });
    mp.events.addCommand("addMarker", function (player, text) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (args.length > 0) {
            var num = Number(args[0]);
            if (Number(args[0]) > 0) {
                mp.markers.new(1, player.position, num);
            }
            else {
                player.notify("Wrong parameter: radius must be a positive number");
            }
        }
        else {
            player.notify("Syntax: marker <radius>");
        }
    });
    mp.events.addCommand("removeMarker", function (player, text) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        mp.markers.forEachInRange(player.position, 200, function (marker) {
            marker.destroy();
        });
    });
    mp.events.addCommand("spawnVehicle", function (player, text) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (args.length == 1) {
            mp.vehicles.new(vehicleHashes[args[0].toLowerCase()], player.position);
        }
        else {
            player.notify("Fehlerhafte Anzahl an Parametern: spawnVehicle <name>");
        }
    });
});
