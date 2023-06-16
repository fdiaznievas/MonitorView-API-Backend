"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("./../config/config");
const models_1 = require("./../db/models");
const USER = encodeURIComponent(config_1.config.dbUser || "undefined");
const PASSWORD = encodeURIComponent(config_1.config.dbPassword || "undefined");
const URI = `postgres://${USER}:${PASSWORD}@${config_1.config.dbHost}:${config_1.config.dbPort}/${config_1.config.dbName}`;
exports.sequelize = new sequelize_1.Sequelize(URI, {
    dialect: 'postgres',
    logging: true
});
(0, models_1.setupModels)(exports.sequelize);
exports.sequelize.sync({ logging: console.log });