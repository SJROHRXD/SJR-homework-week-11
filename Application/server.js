// REQUIRE //

const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = require("express").Router();

const fs = require("fs");
const path = require("path");

const app = express();

const routes1 = require("./routes/index.js");
const db = require("./db/db.json");
const { ppid } = require("process");

const PORT = process.env.PORT || 3000;


// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// SET A STATIC FOLDER //
app.use(express.static(path.join(__dirname, "public")));