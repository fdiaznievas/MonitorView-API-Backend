import { Model, DataTypes, Sequelize } from 'sequelize';

export const ZABBIX_TABLE = 'zabbixs';

export const ZabbixSchema = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  severity: {
    allowNull: false,
    type: DataTypes.STRING
  },
  time_: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING
  },
  host: {
    allowNull: false,
    type: DataTypes.STRING
  },
  problem: {
    allowNull: false,
    type: DataTypes.STRING
  },
  duration: {
    allowNull: false,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  actions: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: DataTypes.NOW
  }
}

export class Zabbix extends Model {

  static associate(){
    //associate
  }

  static config(sequelize:Sequelize) {
    return {
      sequelize,
      tableName: ZABBIX_TABLE,
      modelName: 'Zabbix',
      timestamps: true
    }
  }


}
