const express = require('express');
const ticketRoute = express.Router();

//User model
let Ticket = require('../models/ticketReservation')

ticketRoute.route('/create').post((req,res, next) => {
  Ticket.create(req.body, (error, data) => {
    if(error){
      return next(error)
    }else{
      res.json(data)
    }
  })
})

ticketRoute.route('/').get((req, res, next) => {
  Ticket.find((error, data) => {
    if(error){
      return next(error)
    }else{
      res.json(data);
    }
  })
})

module.exports = ticketRoute;
