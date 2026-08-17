import app from './src/app.js';
import { connectDb } from './src/config/db.js';
import { env } from './src/config/env.js';
import { logger } from './src/utils/logger.js';
async function start() {
    await connectDb();//starts the db
    app.listen(env.port, () => {
        logger.info(`Vault backend runnign port:${env.port}`)
    })
}
start()//crank it up