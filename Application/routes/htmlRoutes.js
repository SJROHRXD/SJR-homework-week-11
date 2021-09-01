// REQUIRED / DEPENDENCIES 🍌 //
const path = require("path");
const router = require("express").Router();

// // GET NOTES PAGE //
// request the notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET INDEX PAGE //
// requests the index page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// NO ROUTE / NO PROBLEM 🍒 //
// if no route, redirect to index
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;