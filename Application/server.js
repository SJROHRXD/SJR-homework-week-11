// REQUIRE 🍓 //
const moment = require("moment");
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

// PARSE JSON 🍓 //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", "index.js");

// SET A STATIC FOLDER 🍓 //
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

// LOAD NOTES FROM DB 🍓 //
app.get("/lib/notes", (req, res) => {
    res.json(db);
});

// NOTE 🍓 //
app.post("lib/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuid();
    const note = req.body;
    db.push(note);
    fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), function (err, data) {
        if (err) {
            throw err
        } else {
            res.send(data)
        }
    });
});

// LOOK FOR NOTE BY ID 🍓 //
function findNoteByID(id, db) {
    const result = db.filter(note => note.id === id)[0];
    return result;
};

// DELETE NOTE 🍓 //
app.delete("//:id", (req, res) => { 
    const result = findNoteByID(req.params.id, db);
    console.log(result);
    const index = (db.indexOf(result));
    console.log(index);
    db.splice(index, 1);
    fs.writeFile("db/db.json", JSON.stringify(db , null, 2), function (err, data) {
      if (err) {
        throw err
      } else {
        res.send(data)
      }
    });
  });

// FIRST ROUTE 🍓 //
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
  });
  
// LISTEN WHERE? + TIME 🍓 //
  app.listen(PORT, () => {
    console.log(`Server now on port: ${PORT}; ${moment().format()}!`);
  });


















// RETURN JSON //
// app.get("db.json", (req,res) => {
//     res.json(gettingsomevar);
// });


// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });
