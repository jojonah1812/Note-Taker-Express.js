const router=require('express').Router();
//research why R and not r


const path = require('path');

// To create a new directory in your index.js file, insert __dirname as the first argument to path.join() and the name of the new directory as the second:
//dirname - allows you access to the full path of the directory you are in.  Starts at C: drive.
//see class 6/10  11 ACT 3 1:41pm
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

//exporting allows you to use in server.js
module.exports=router;