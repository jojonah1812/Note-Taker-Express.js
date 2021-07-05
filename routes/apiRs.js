const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const uniqid = require('uniqid');

let { notes } = require('../db/db.json');

function createNote(body, arrayNotes) {
    const note = body;
    arrayNotes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: arrayNotes }, null, 2)
    );
    return note;
}

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = uniqid();
    const note = createNote(req.body, notes);
    res.json(note)
});

module.exports = router;

