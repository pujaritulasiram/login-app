const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/authentication", err => {
    if (err) {
        console.log(err);
    } else {
        console.log('mongodb connected successfully');
    }
});

//routes
const user = require('./routes/users');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());

//using routes
app.use('/api/users', user );

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`app is running on port ${port}`);
    }
});

