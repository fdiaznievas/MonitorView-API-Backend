import { Pool } from "pg";
import { config } from '../config/config'

const USER = encodeURIComponent(config.dbUser || "undefined");
const PASSWORD = encodeURIComponent(config.dbPassword || "undefined");
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

export const pool = new Pool({ connectionString: URI});



