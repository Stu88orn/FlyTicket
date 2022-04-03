const express = require('express');
const weatherRoute = express.Router();

//Weather model
const weather = require("../weather/weather");

weatherRoute.route('/:name').get((req,res,next) => {
  weather.getWeather(req.params.name).then(function(result){
    res.status(200).json({
      msg: result
    })
  });
})

module.exports = weatherRoute;
