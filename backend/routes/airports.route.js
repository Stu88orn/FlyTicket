const express = require('express');
const airportRoute = express.Router();

//User model
let airport = require('../models/airports')

module.exports = airportRoute;
