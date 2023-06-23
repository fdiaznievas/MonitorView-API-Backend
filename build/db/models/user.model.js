"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = exports.USER_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.USER_TABLE = 'users';
exports.UserSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    user: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: 'create_at',
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: 'update_at',
        defaultValue: sequelize_1.DataTypes.NOW
    }
};
class User extends sequelize_1.Model {
    static associate() {
        //associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.USER_TABLE,
            modelName: 'User',
            timestamps: false
        };
    }
}
exports.User = User;
