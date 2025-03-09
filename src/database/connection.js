import dotenv from'dotenv';
import mysql from 'mysql2/promise';
// read variables from .env

dotenv.config({
    path: "./config.env"
})

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
}

const connection = await mysql.createConnection(config);
console.log("Connected to database");
export default connection;