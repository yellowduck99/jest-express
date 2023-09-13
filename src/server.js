import sequelize from "./libs/configs/database.js";
import apis from "./app.js";
import config from "./libs/configs/config.js";
import express from "express";
const app = express();

app.use('/api', apis);
const server = app.listen(config.serverPort, () => {
    console.log(`App listening at port ${config.serverPort}`);
});

process.on("SIGTERM", () => {
    console.log("SIGTERM signal received.");
    console.log("Closing http server.");
    server.close(() => {
        console.log("Http server closed.");
        sequelize.close().catch((err) => {
            logger.error(err);
        });
    });
});
