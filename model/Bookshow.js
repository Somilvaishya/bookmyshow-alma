const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defining the schema for the booking model
const bookMyShowSchema = new Schema({
  movie: {
    required: true,
    type: String,
  },
  slot: {
    required: true,
    type: String,
  },
  seats: {
    required: true,
    type: Array,
  },
});

// Creating the Bookshow model
const Bookshow = mongoose.model('Bookshow', bookMyShowSchema);
// exporting the Bookshow module
module.exports = Bookshow;
