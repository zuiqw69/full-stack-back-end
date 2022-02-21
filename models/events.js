const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: String,
  location: String,
  information: String,
  date: Date
})

module.exports.Events = mongoose.model('Events', eventSchema, 'events')