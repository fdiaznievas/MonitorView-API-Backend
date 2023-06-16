import {Client} from "pg";

export async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: "admin",
    password: "adminPostgres,2023",
    database: "monitor_view"
  });
  await client.connect();
  return client;
}



