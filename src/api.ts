import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config({path:'.env.local'});

const mongoUrl = process.env.MongoUrl || "";

mongoose.connect(mongoUrl)

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes);

export default app;