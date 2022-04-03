const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Flight = new Schema({
  origin: {type: String},
  destination: {type: String},
  airplainType: {type: String},
  departure_date: {type: String},
})

module.exports = mongoose.model('Flight', Flight)
