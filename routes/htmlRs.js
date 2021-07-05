const router=require('express').Router();

const path=require('path');

// To create a new directory in your index.js file, insert __dirname as the first argument to path.join() and the name of the new directory as the second:
//dirname - allows you access to the full path of the directory you are in.  Starts at C: drive.
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

module.exports=router;