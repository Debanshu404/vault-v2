import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "../utils/logger.js"
export async function connectDb() {
    try {
        await mongoose.connect(env.mongoUri);
        logger.info("mONGODB CONNECTED")
    } catch (error) {
        logger.error(`mONGODB CONNECTION FAILED:( ${error.message}`);
        process.exit(1);
    }
}