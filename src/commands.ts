let vehicleHashes = require("./vehicles.json");

export default () => {
    //Return the current position
    mp.events.addCommand("pos", (player : PlayerMp, text : string, ...args : string[]) => {
        player.notify(`X=${player.position.x} Y=${player.position.y} Z=${player.position.z}`);
        console.log(`X=${player.position.x} Y=${player.position.y} Z=${player.position.z}`);
    })
    
    //Adds a marker to analyze an area
    mp.events.addCommand("addMarker", (player : PlayerMp, text : string, ...args: string[]) => {
        if(args.length > 0) {
            const num = Number(args[0]);
    
            if(Number(args[0]) > 0) {
                mp.markers.new(1, player.position, num);
            } else {
               player.notify("Wrong parameter: radius must be a positive number");
            }
        } else {
            player.notify("Syntax: marker <radius>");
        }
    });
    
    //Remove all markers in range of 200 
    mp.events.addCommand("removeMarker", (player : PlayerMp, text : string, ...args: string[]) => {
        mp.markers.forEachInRange(player.position, 200, (marker) => {
            marker.destroy();
        })
    });
    
    //Creates a vehicle
    mp.events.addCommand("spawnVehicle", (player : PlayerMp, text : string, ...args : string[]) => {
        if(args.length == 1) {
            mp.vehicles.new(vehicleHashes[args[0].toLowerCase()], player.position);
        }
        else {
            player.notify("Fehlerhafte Anzahl an Parametern: spawnVehicle <name>");
        }
    });

    //Gives the player a universal key
    mp.events.addCommand("giveKey", (player : PlayerMp, text : string, ...args : string[]) => {
        if(typeof(player.data.key) === "undefined") player.setVariable("key", false);

        player.setVariable("key", !player.data.key);
        console.log(player.data.key);
    });
}