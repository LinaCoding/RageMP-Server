"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    money: { type: Number, required: true },
    level: { type: Number, required: true }
});
exports.UserModel = mongoose.model("user", UserSchema);
