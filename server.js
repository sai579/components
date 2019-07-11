'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const PORT = 8000;

const app = express();


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//Set static folder
app.use(express.static(path.join(__dirname, 'views')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);


app.listen(PORT, () => {
    console.log('Server listening on port ', PORT);
});
