import express from "express";
import morgan from "morgan";
// import dotenv from "dotenv";
import * as dotenv from 'dotenv'
const app = express();

// Import routes
import usuario from "./routes/routes.js";
import aprendiz from "./routes/routes.js";
import persona from "./routes/routes.js";
import login from "./routes/routes.js";
import  registro  from "./routes/routes.js";
// import taskRoutes from "./routes/tasks.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes persona
app.use("/", persona);
//routers de usuario
app.use('/',usuario)
// Routes aprendiz
app.use('/',aprendiz)
//Routers de login
app.use('/',registro)

dotenv.config({path:'./env/.env'})

// app.use("/api/tasks", taskRoutes);

export default app;