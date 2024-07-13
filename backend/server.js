import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouts from './routes/auth.routes.js';
import getUsers from './routes/user.routes.js';
import messageRoutes from './routes/message.routes.js';

import connectToMongoDB from './connectToMongoDB.js';
import { app, server } from "./soket/soket.js";

const PORT = 5000;
const __dirname = path.resolve()

dotenv.config();

app.use(express.json()) 
app.use(cookieParser());

app.use("/api/auth", authRouts);

app.use("/api/messages", messageRoutes);

app.use("/api/users", getUsers);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/", (req, res) => {
    res.send("Hello World!");
});


server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server listening on port ${PORT}`);
})