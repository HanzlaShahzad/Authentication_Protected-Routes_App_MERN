import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user.js";
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use('/', router);

//Connection
mongoose.connect("mongodb://127.0.0.1:27017/authCrud");

//PORT
app.listen(2000);