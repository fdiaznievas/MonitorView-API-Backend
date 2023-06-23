import { Model, DataTypes, Sequelize } from 'sequelize';

export const NOVEDAD_TABLE = 'novedades';

export const NovedadSchema = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  caseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  problemDate: {
    allowNull: false,
    type: DataTypes.DATE
  },
  cid: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  sitio: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: DataTypes.NOW
  }
}

export class Novedad extends Model {

  static associate(){
    //associate
  }

  static config(sequelize:Sequelize) {
    return {
      sequelize,
      tableName: NOVEDAD_TABLE,
      modelName: 'Novedad',
      timestamps: true
    }
  }


}
