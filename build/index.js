"use strict";
//import mongoose = require('mongoose');
//import { UserModel } from './schema/userSchema';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = __importDefault(require("./commands"));
var events_1 = __importDefault(require("./events"));
var customEvents_1 = __importDefault(require("./customEvents"));
commands_1.default();
events_1.default();
customEvents_1.default();
