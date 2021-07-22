import { IUser, UserModel } from "../schema/userSchema";

export const welcomePlayer = async (player : PlayerMp) => {
    const user = await UserModel.findOne({ name: player.name });
    
    //Check if user already exists in database (otherwise create)
    if(user) {
        player.notify(`Wilkommen zurück ${player.name}!`);
        player.setVariable("info", user);
    } else {
        const user = await UserModel.create({ name: player.name });
        player.notify(`Wilkommen ${player.name}`);
        player.setVariable("info", user);
    }
}

export const loadEquip = (player : PlayerMp) => {
    const data : IUser = player.getVariable("info")

    if(data) {
        //Loads the player clothes
        Object.keys(data.clothes).map((x, i) => {
            player.setClothes(i, data.clothes[x], 0, 0);
        });
        
        //Loads the player props
        player.setProp(0, data.props.hat, 0);
        player.setProp(1, data.props.glasses, 0);
        player.setProp(2, data.props.ears, 0);
        player.setProp(6, data.props.watch, 0);
        player.setProp(7, data.props.bracelet, 0);
        
        //Loads the player weapons
        data.weapons.map(x => {
            player.giveWeapon(x.hash, x.ammo);
        });
    }
}
