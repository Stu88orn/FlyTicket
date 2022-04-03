const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Airport = new Schema({
  origin: {type: String},
})

module.exports = mongoose.model('Airport', Airport)
