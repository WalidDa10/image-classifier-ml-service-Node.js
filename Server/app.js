import dotenv from "dotenv"
import express, { json } from "express";
import ConnectToDB from "./config/DB.js";
import cors from "cors"
import classifyRoutes from './Routes/classifyRoutes.js'

dotenv.config();


//init App
const app = express();

//Connetion to DB
ConnectToDB()


//Middlawers
app.use(express.json())
app.use(cors());

// Routes
app.use('',classifyRoutes)

const Port = process.env.PORT || 2020

app.listen(Port ,()=>{
    console.log(`Server is running on PORT: ${Port}`);
} )
