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



