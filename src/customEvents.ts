
export default () => {
    //Check if user owns a key and toggle the lock state of the vehicle
    mp.events.add("unlockVehicle", (player : PlayerMp, vehicle : VehicleMp) => {
        if(player.data.key === true) {
            vehicle.locked = !vehicle.locked;
            player.outputChatBox(`Vehicle ${ vehicle.locked ? "locked" : "unlocked" }`);
        }
    });

}