const express = require("express");
const fs = require('fs');
const router = express.Router();
const util = require('util');
const uuid = require('../helpers/uuid');

//Get route for retrieving all notes
router.get("/", (req, res) =>{
console.info(`${req.method} request received.`);
readFromFile(`./db/db.json`)
.then((data) => res.json(JSON.parse(data)))
.catch((err) => console.log("Error:", err));
});


//Post route for submitting a new note
router.post('/', (req, res) =>{
    console.info(`${req.method} request received to add a new note.`);

    const { title, text } = req.body;

    if (req.body){
        const newNote = {
            title,
            text,
            id: uuid(),

        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`);
    } else {
        res.error('Error in adding note!');
    }

})

//Delete route for deletting a note
router.delete('/:id', (req, res) =>{
console.info(`${req.method} request received.`);
readFromFile('./db/db.json')
.then((data) =>{
    const notes = JSON.parse(data);
    res.json(filteredNotes);
    writeToFile('./db/db.json', filteredNotes);
})
.catch((err) => console.log("Error:", err));


})












module.exports = router;