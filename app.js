import express from "express"; 
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import authrouter from "./api/routes/auth.routes.js";
import cookieParser from "cookie-parser";
import organisation from "./api/routes/orgainsation.routes.js"
import framework from "./api/routes/framework.routes.js"



dotenv.config();
dbConnect();
const app = express(); 

// middlewares:
app.use(express.json());
app.use(cookieParser());

// route
app.use("/api/auth", authrouter);
app.use("/api/organisation",organisation );
app.use("/api/framework",framework );

// http://localhost:5000/api/auth/signup

export default app; 
