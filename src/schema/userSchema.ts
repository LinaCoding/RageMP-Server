import mongoose = require('mongoose');

export interface IUser {
    userName: string;
    money: number;
    level: number;
    inventory: IInventory[];
    clothes: IClothes;
    props: IProps;
    garage: ICar[];
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

export interface IWeapon {
    hash: number;
    ammu: number;
    components: number[];
}

export interface ICar {
    hash: number,
    plate: string,
    color: IColor
}

export interface IColor {
    red: number;
    blue: number;
    green: number
}

const UserSchema : mongoose.Schema = new mongoose.Schema({
    name: { type:  String, required: true },
    money: { type: Number, required: true, default: 100 },
    level: { type: Number, required: true, default: 1 },
    experience: { type: Number, required: true, default: 0 },
    inventory: [
        {
            itemName: { type: String },
            count: { type: Number, default: 1 }
        }
    ],
    clothes: {
        head: { type: Number, required: false, default: 0 },
        mask: { type: Number, required: false, default: 0 },
        hair: { type: Number, required: false, default: 0 },
        torso: { type: Number, required: false, default: 0 },
        legs: { type: Number, required: false, default: 0 },
        bag: { type: Number, required: false, default: 0 },
        shoes: { type: Number, required: false, default: 0 },
        accessories: { type: Number, required: false, default: 0 },
        undershirt: { type: Number, required: false, default: 0 },
        armor: { type: Number, required: false, default: 0 },
        decals: { type: Number, required: false, default: 0 },
        top: { type: Number, required: false, default: 0 }
    },
    props: {
        hat: { type: Number, required: false },
        glasses: { type: Number, required: false },
        ears: { type: Number, required: false },
        watch: { type: Number, required: false },
        bracelet: { type: Number, required: false }
    },
    weapons: [
        {
            hash: { type: Number, required: true},
            ammu: { type: Number, required: true, default: 0},
            components: [{ type: Number }]
        }
    ],
    garage: [
        {
            hash: { type: Number, required: false },
            plate: { type: String, required: false },
            color: {
                red: { type: Number, required: true, default: 0 },
                green: { type: Number, required: true, default: 0 },
                blue: { type: Number, required: true, default: 0 }
            },
            components: [
                {
                    key: { type: Number },
                    value: { type: Number }
                }
            ]
        }
    ]
});

export const UserModel : mongoose.Model<IUser> = mongoose.model<IUser>("user", UserSchema);
