import { Sequelize } from "sequelize";
import { config } from "./../config/config";
import { setupModels } from "../db/models";

const dbEngine = config.dbEngine?.toString()
const USER = encodeURIComponent(config.dbUser || "undefined");
const PASSWORD = encodeURIComponent(config.dbPassword || "undefined");
const URI = `${dbEngine}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

setupModels(sequelize);
export default sequelize;

// sequelize.sync() // { logging: console.log }  { alter:true } { force:true }
