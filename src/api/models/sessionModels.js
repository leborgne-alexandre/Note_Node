const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema;

let sessionSchema = new Schema({
  year: {
    type: Integer,
    required: "Year required"
  },
  name: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Session', sessionSchema);
