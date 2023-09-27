// import all required 3rd party module
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

//import core module
const bodyParser = require('body-parser');

// own importes for routes
const booking = require('./routes/booking');

const app = express();
const port = process.env.port || 8080;
const mongodbURI = process.env.MONGOOSE_URI;
const server = app.listen(port, () => {
  console.log('server is up on port', port);
});

// here we configure with Database
mongoose
  .connect(mongodbURI)
  .then(() => console.log('Mongodb Successfully connected'))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: 'http://localhost:3000/BMS-Frontend', // Adjust this to match your frontend URL
  })
);
// this is the body parser middleware to parse urlencoded data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// this is the body-parser middleware to parse json data
app.use(bodyParser.json());

app.use('/booking', booking);
