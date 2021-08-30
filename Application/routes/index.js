// REQUIRE 🍌 //
const path = require("path");
const router = require("express").Router();

// GET INDEX PAGE; GET NOTES PAGE 🍌 //
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// EXPORT 🍌 //
module.exports = router;