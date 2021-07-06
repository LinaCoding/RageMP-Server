import mongoose = require('mongoose');

export interface IUser {
    userName: string;
    money: number;
    level: number;
    inventory: IInventory[];
}

export interface IInventory {
    itemName: string;
    count: number;
}

export interface IClothes {
    head: number;
    mask: number;
    hair: number;
    torso: number;
    legs: number;
    bag: number;
    shoes: number;
    accessories: number;
    undershirt: number;
    armor: number;
    decals: number;
    top: number;
}

export interface IProps {
    hat: number;
    glasses: number;
    ears: number;
    watch: number;
    bracelet: number;
}

const UserSchema : mongoose.Schema = new mongoose.Schema({
    name: { type:  String, required: true },
    money: { type: Number, required: true},
    level: { type: Number, required: true},
    inventory: [
        {
            itemName: { type: String },
            count: { type: Number }
        }
    ]
});

export const UserModel : mongoose.Model<IUser> = mongoose.model<IUser>("user", UserSchema);
