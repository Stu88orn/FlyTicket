const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let TicketReservation = new Schema({
  reservationNumber: String,
  passengerFirstName: String,
  passengerLastName: String,
  passportNumber: String,
  flightNumber: String,
  arrivalAirportCode: String,
  departureAirportCode: String,
  flightStartDate: String,
  seatNumber: String
})

module.exports = mongoose.model('TicketReservation', TicketReservation)
