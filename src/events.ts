import handleStartup from "./handlers/startup";
import dynamicWeather from "./handlers/dynamicWeather";
import { loadEquip, welcomePlayer } from "./handlers/playerJoin";

export default () => {
    mp.events.add("packagesLoaded", async () => {
        handleStartup();
        dynamicWeather();
    });
    
    mp.events.add(RageEnums.EventKey.PLAYER_ENTER_COLSHAPE, (player: PlayerMp, colshape: ColshapeMp) => {
        player.notify(`You entered ${colshape.data.info.name}`);
    });

    mp.events.add(RageEnums.EventKey.PLAYER_JOIN, () => {
        
    });
    
    mp.events.add(RageEnums.EventKey.PLAYER_JOIN, async (player : PlayerMp) => {
        await welcomePlayer(player);
        loadEquip(player);
    });
}
