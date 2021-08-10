const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan")


const app = express();

// // view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// logger set up
app.use(logger('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
}));

// set static folder
app.use('/static', express.static('public'));

//parse JSON data
app.use(express.json());
const {projects} = require('./data.json');
const morgan = require("morgan");

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
    try {
        if (!project) {
            next(createError(404, "This project does not exist."));
        }
    res.render('project', {project});
    }catch(err) {
        next(err);
    }
});

//error handling
app.use(function (req, res, next) {
    next(createError(404, "This page does not exist."));
  });

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

    if (err.status === 404) {
        res.status(err.statusCode);
        console.log(`${err.statusCode}: ${err.message}`)
        res.render('page-not-found', {err});
    } else {
        res.status(err.statusCode || 500);
        console.log(`${err.statusCode}: ${err.message}`)
        res.render('error', {err});
    }
});


//listening
const PORT = process.envPORT || 3000;
app. listen(PORT, () => console.log(`server started on port ${PORT}`));
