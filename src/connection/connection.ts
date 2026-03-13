import { Sequelize } from "sequelize-typescript";
import { Tier } from "../models/tier";
import { Empresa } from "../models/empresa";

const connection = new Sequelize({
  database: "sisweb_db",
  dialect: "postgres",
  username: "sisweb_user",
  password: "HDK#$%Ljkwerff.89",
  host: "localhost",
  port: 5432,
  models: [Tier, Empresa],
  logging: console.log
});

async function connectionDB() {
  try {
    await connection.authenticate();
    console.log("Conexión exitosa a la base de datos PostgreSQL.");
    await connection.sync();
    console.log("Tablas sincronizadas.");
  } catch (e) {
    console.log("Error al conectar con la base de datos:", e);
  }
}

export default connectionDB;