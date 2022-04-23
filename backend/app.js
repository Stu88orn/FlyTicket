const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const parse = require("dotenv");
require('dotenv').config({path: 'variables.env'});

const connectionString = process.env.API_KEY;

// Connecting with mongo db
mongoose
  .connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,})
  .then(
    () => {
      return console.log("Połączono z bazą danych");
    },
    (error) => console.log(`Błąd ${error}`)
  );

  const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/fly-ticket')))
app.use('/', express.static(path.join(__dirname, 'dist/fly-ticket')))

const userRoute = require('../backend/routes/user.route')
const weatherRoute = require('../backend/routes/weather.route')
const flightRoute = require('./routes/flight.route')
const ticketRoute = require('./routes/ticket.route')
const airportRoute = require('./routes/airports.route')

app.use('/api', userRoute)
app.use('/api/weather', weatherRoute);
app.use('/api/airpots', airportRoute );
app.use('/api/flight', flightRoute);
app.use('/api/Seats', ticketRoute);

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
  next({message : res.error});
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
