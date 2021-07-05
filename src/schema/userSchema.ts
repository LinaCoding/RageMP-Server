import mongoose = require('mongoose');

export interface IUser {
    userName: string;
    money: number;
    level: number;
}

const UserSchema : mongoose.Schema = new mongoose.Schema({
    name: { type:  String, required: true },
    money: { type: Number, required: true},
    level: { type: Number, required: true}
});

export const UserModel : mongoose.Model<IUser> = mongoose.model<IUser>("user", UserSchema);
