var express = require("express");
var path = require('path');
var projects = require('./data.json');

var app = express();

// // view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set static folder
app.use('/static', express.static('public'));

//routes
app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/project', (req, res, next) => {
    res.render('project');
});


//listening
const PORT = process.envPORT || 5000;
app. listen(PORT, () => console.log(`server started on port ${PORT}`));
