const express = require("express");
require("dotenv").config();
const mongoose=require("mongoose");
const item = require("./routes/itemRoute");

mongoose.connect(process.env.DB_URL,()=>console.log("DB CONNECTED"));

const app=express();
app.use(express.json());

app.use("/api/items",item);

app.listen(process.env.PORT || 5000,()=>console.log("Server working on port 5000!"));