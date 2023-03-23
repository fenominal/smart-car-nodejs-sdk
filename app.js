"use strict";

// import smartcar from "smartcar";
import express from "express";
import dotenv from "dotenv";
//Connection file..
import connectDB from "./db/conn.js";

import indexRouter from "./router/index.js";
import client from "./connection/coonectionFile.js";
// Env file file
dotenv.config({ path: "./config/.env" });

connectDB();

const port = 4040;
const app = express();

app.set("view engine", ".hbs");
app.use(express.json({ limit: "30mb", extended: true }));
console.log("============ Application Started ==========");
app.use("/", indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
