"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.environments = void 0;
const config_1 = require("./../config/config");
const dbEngine = (_a = config_1.config.dbEngine) === null || _a === void 0 ? void 0 : _a.toString();
const USER = encodeURIComponent(config_1.config.dbUser || "undefined");
const PASSWORD = encodeURIComponent(config_1.config.dbPassword || "undefined");
const URI = `${dbEngine}://${USER}:${PASSWORD}@${config_1.config.dbHost}:${config_1.config.dbPort}/${config_1.config.dbName}`;
exports.environments = {
    development: {
        url: URI,
        dialect: dbEngine
    },
    production: {
        url: URI,
        dialect: dbEngine
    },
};
