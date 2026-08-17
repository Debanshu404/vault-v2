// src/utils/logger.js
import winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',           // 👈 this
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [new winston.transports.Console()]
});
//WORK OF WINSTON