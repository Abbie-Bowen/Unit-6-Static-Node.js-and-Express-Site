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
const {projects} = require('./data.json');

//routes
app.get('/', (req, res, next) => {
    res.render('index', {projects});
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/project/:id', (req, res, next) => {
    const projectId =  req.params.id;
    const project = projects.find(({id}) => id === +projectId);

    if (project) {
    res.render('project', {project});
    } else {
        res.sendStatus(404);
    }
});

app.get('/404', (req, res, next) => {
    res.render('page-not-found');
})


//listening
const PORT = process.envPORT || 3000;
app. listen(PORT, () => console.log(`server started on port ${PORT}`));
