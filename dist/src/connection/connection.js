"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const tier_1 = require("../models/tier");
const empresa_1 = require("../models/empresa");
const connection = new sequelize_typescript_1.Sequelize({
    database: "sisweb_db",
    dialect: "postgres",
    username: "sisweb_user",
    password: "HDK#$%Ljkwerff.89",
    host: "localhost",
    port: 5432,
    models: [tier_1.Tier, empresa_1.Empresa],
    logging: console.log
});
async function connectionDB() {
    try {
        await connection.authenticate();
        console.log("Conexión exitosa a la base de datos PostgreSQL.");
        await connection.sync();
        console.log("Tablas sincronizadas.");
    }
    catch (e) {
        console.log("Error al conectar con la base de datos:", e);
    }
}
exports.default = connectionDB;
