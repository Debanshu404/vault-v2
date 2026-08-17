import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoSanitize from 'express-mongo-sanitize';//prevents nosql Injection
import rateLimit from 'express-rate-limit';//prevents brute force attacks
import { env } from "./config/env.js";
import notFound from "./middleware/notFound.js"
import errorHandler from "./middleware/errorHandler.js"

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import directoryRoutes from "./routes/directory.routes.js";
import filesRoutes from "./routes/files.routes.js"
//setting up the express
const app = express();
//instantiating the middlewares 
app.use(helmet());//used for setting up the security headers
app.use(cors({ origin: env.clientOrigin, credentials: true }))//used for enabling cross origin resource sharing 
app.use(morgan("dev")) //dev here means developer mode which will log all the requests and responses 
app.use(mongoSanitize())//no sql injection queries se bachata hai
app.use(cookieParser(env.cookieSecret));
app.get('/health', (req, res) => res.json({ status: "ok" }));

//setting up the routes  //setting up the routes 
// app.use('/api/v1/auth', authRoutes);//used for authentication 
// app.use('/api/v1/user', userRoutes);//used for user data 
// app.use('/api/v1/directory', directoryRoutes)//used for folders 
// app.use('/api/v1/files', filesRoutes)//used for files 

//setting up the error middlewares
app.use(notFound);//used for not found routes 
app.use(errorHandler);//used for error 
export default app;
















































// ignore
// Why /api/v1 prefix: v1 had no versioning. This costs nothing today and saves you from breaking the frontend the moment you change a response shape in a later phase.

// Why no listen() here: keeping app config separate from server startup means you can import app directly into a test file without actually opening a port — needed for Stage 7.