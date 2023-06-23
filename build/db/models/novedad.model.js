"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Novedad = exports.NovedadSchema = exports.NOVEDAD_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.NOVEDAD_TABLE = 'novedades';
exports.NovedadSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    caseId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        unique: true
    },
    problemDate: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    cid: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    },
    sitio: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    description: {
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
class Novedad extends sequelize_1.Model {
    static associate() {
        //associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.NOVEDAD_TABLE,
            modelName: 'Novedad',
            timestamps: true
        };
    }
}
exports.Novedad = Novedad;
