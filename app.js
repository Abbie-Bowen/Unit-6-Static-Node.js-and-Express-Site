const express = require("express");
const path = require('path');


const app = express();

// // view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set static folder
app.use('/static', express.static('public'));

//parse JSON data
app.use(express.json());
const projects = require('./data.json');
console.log(projects);
// const projects = JSON.parse(projectsJSON);

//routes
app.get('/', (req, res, next) => {
    res.render('index', projects);
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/project/:id', (req, res, next) => {
    res.render('project');
});


//listening
const PORT = process.envPORT || 3000;
app. listen(PORT, () => console.log(`server started on port ${PORT}`));
