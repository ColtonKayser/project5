const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  date: String,
  venue: String,
  booker: String,
  payAmount: Number,
  workHours: Number,
  travelHours: Number,
  travelDistance: Number,
  gasCost: Number,
  milePerGallon: Number
})

const Gigs = mongoose.model('Gig', gigSchema);
module.exports = Gigs;
