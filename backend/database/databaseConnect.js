import mysql from "mysql";
import * as dotenv from "dotenv"
dotenv.config();

const databaseConnect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

databaseConnect.connect((error) => {
    if (error) {
        throw error;
    }
    const database = process.env.DB_DATABASE;
    database.toUpperCase();
    console.log(`Conectado ao Banco de Dados: ${database.toUpperCase()}`);
})

export {
    databaseConnect
}