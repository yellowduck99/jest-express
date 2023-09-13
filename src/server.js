import sequelize from './libs/configs/database.js';
import app from './app.js';
import config from './libs/configs/config.js';
const server = app.listen(config.serverPort, ()=> {
    console.log(`App listening at port ${config.serverPort}
API documentation: https://localhost/qm/api/doc`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
        sequelize.close().catch(err => { logger.error(err); });
    });
});
