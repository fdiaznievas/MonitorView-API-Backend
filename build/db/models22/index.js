"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModels = void 0;
const user_model_1 = require("./user.model");
const zabbix_model_1 = require("./zabbix.model");
function setupModels(sequelize) {
    user_model_1.User.init(user_model_1.UserSchema, user_model_1.User.config(sequelize));
    zabbix_model_1.Zabbix.init(zabbix_model_1.ZabbixSchema, zabbix_model_1.Zabbix.config(sequelize));
}
exports.setupModels = setupModels;
