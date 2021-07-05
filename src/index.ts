//import mongoose = require('mongoose');
//import { UserModel } from './schema/userSchema';

import registerCommands from "./commands";
import registerEvents from "./events";
import registerCustomEvents from "./customEvents";

registerCommands();
registerEvents();
registerCustomEvents();

