import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.dbPort,
        dialect: config.dialect,
        define: {
            underscored: true,
        },
        logging: false,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log(
            `Connected to database: ${config.host}:${config.dbPort}/${config.database}`
        );
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

export default sequelize;
