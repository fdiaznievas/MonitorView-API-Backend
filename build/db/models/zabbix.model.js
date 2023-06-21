"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zabbix = exports.ZabbixSchema = exports.ZABBIX_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.ZABBIX_TABLE = 'zabbixs';
exports.ZabbixSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    severity: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    time_: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        unique: true
    },
    status: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    host: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    problem: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    duration: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    active: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN
    },
    actions: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: 'create_at',
        defaultValue: sequelize_1.DataTypes.NOW
    }
};
class Zabbix extends sequelize_1.Model {
    static associate() {
        //associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.ZABBIX_TABLE,
            modelName: 'Zabbix',
            timestamps: true
        };
    }
}
exports.Zabbix = Zabbix;
