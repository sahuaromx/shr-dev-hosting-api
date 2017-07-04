//dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongoDB:
mongoose.connect('mongodb://shr-mobile4-usr:c0mj4lBI@ds127842.mlab.com:27842/shr-mobile4-db');

//express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

//start server:
app.listen(process.env.PORT);
console.log('Server is running on port ' + process.env.PORT);