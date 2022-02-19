// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const allNotes = require('./db/db.json')

// Setting up the server
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT, () => 
    console.log(`App listening now at localhost://${PORT}`)
);





