// Dependencies
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/notes.js');

// Setting up the server
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes)

//Get/notes return the notes.html file.
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//Get * return return the index.html file.
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);


app.listen(PORT, () => 
    console.log(`App listening now at localhost://${PORT}`)
);





