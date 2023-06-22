import { Sequelize } from "sequelize";
import { config } from "./../config/config";
import { setupModels } from "../db/models";

const dbEngine = config.dbEngine?.toString()
const USER = encodeURIComponent(config.dbUser || "undefined");
const PASSWORD = encodeURIComponent(config.dbPassword || "undefined");
const URI = `${dbEngine}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelizeConnection = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

setupModels(sequelizeConnection);

export default sequelizeConnection;

// sequelize.sync() // { logging: console.log }  { alter:true } { force:true }
