"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./../config/config");
const models_1 = require("../db/models");
const dbEngine = (_a = config_1.config.dbEngine) === null || _a === void 0 ? void 0 : _a.toString();
const USER = encodeURIComponent(config_1.config.dbUser || "undefined");
const PASSWORD = encodeURIComponent(config_1.config.dbPassword || "undefined");
const URI = `${dbEngine}://${USER}:${PASSWORD}@${config_1.config.dbHost}:${config_1.config.dbPort}/${config_1.config.dbName}`;
const sequelize = new sequelize_1.Sequelize(URI, {
    dialect: 'postgres',
    logging: true
});
(0, models_1.setupModels)(sequelize);
exports.default = sequelize;
// sequelize.sync() // { logging: console.log }  { alter:true } { force:true }
