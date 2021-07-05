const router = require('express').Router();
const path = require('path');
const uniqid = require('uniqid');
const fs = require("fs");

let { notes } = require('../db/db.json');

//create handleRequest that has callback func as a parameter - which is the function that 
//allows us to handle requests. ex. line 8 - handleRequest. As a request and response as parameters. 
//class 6/10 11 Act 1 (12:09)
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    //write content of db in JSOn
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}
//Gets, collects
router.get("/notes", (req, res) => {
    res.json(notes);
}
);

//Postrs, adds new
router.post("/notes", (req, res) => {
    req.body.id = uniqid();
    const note = createNote(req.body, notes);
    res.json(note)
}
);

module.exports = router;

