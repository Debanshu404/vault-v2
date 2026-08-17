// src/config/env.js
import 'dotenv/config';

const required = ['PORT', 'MONGO_URI', 'COOKIE_SECRET', 'RESEND_API_KEY'];

for (const key of required) {
    if (!process.env[key]) {
        throw new Error(`Missing required env var: ${key}`);
    }
}

export const env = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    cookieSecret: process.env.COOKIE_SECRET,
    resendApiKey: process.env.RESEND_API_KEY,
    nodeEnv: process.env.NODE_ENV || 'development',
    clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
};