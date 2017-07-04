//dependencies
var express = require('express');
var router = express.Router();

//get models
var Dominio = require('../models/dominio');

//routes
Dominio.methods(['get', 'post', 'put', 'delete']);
Dominio.register(router, '/dominio');

//return router
module.exports = router;