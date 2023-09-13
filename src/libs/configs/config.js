// config of mysql at host

import dotenv from "dotenv";
const dotenvConfig =
    process.env.NODE_ENV === "production" ? { path: "/run/secrets/.env" } : {};
dotenv.config(dotenvConfig);
const config = {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dialect: "mysql",
    host: process.env.DB_HOST,
    serverPort: process.env.SERVER_PORT,

};

export default config;
