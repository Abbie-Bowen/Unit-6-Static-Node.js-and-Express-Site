var express = require("express");
var path = require('path');
// var data = require('/data.json');

var app = express();

// // view engine 
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


//listening
const PORT = process.envPORT || 5000;
app. listen(PORT, () => console.log(`server started on port ${PORT}`));
