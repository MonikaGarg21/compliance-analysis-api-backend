// 31-3 (monday)-> local hosting

// (1-4 tuesday) ->mongodb
// LIVUV
// odm and orm - oject relational and database modal
// cmd -> npm i mongoose

import express from "express"; // bring express into this file so i can use it
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import authrouter from "./api/routes/auth.routes.js";
import organisation from "./api/routes/organisation.routes.js";
import cookieParser from "cookie-parser";


dotenv.config();
dbConnect();
const app = express(); // creates an express application instance, app is your main backend application,  we can yse it to create routes, use middleware, handle requests

// middlewares:
app.use(express.json());
app.use(cookieParser());

// route
app.use("/api/auth", authrouter);
app.use("/api/organisation", organisation);

// http://localhost:5000/api/auth/signup

export default app; // export app so to use in other files (eg. server.js)
