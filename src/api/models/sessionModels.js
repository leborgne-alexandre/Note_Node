const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema;

let sessionSchema = new Schema({
  year: {
    type: Number,
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


const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
