const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema;

let moduleSchema = new Schema({
  name: {
    type: String,
    required: "Module name required"
  },
  id_intervenant: {
    type: Number,
    required: "Intervenant id required"
  },
  id_session: {
    type: Number,
    required: "Session id required"
  },
  start_date: {
    type: Date,
    required: "Start date required"
  },
  finish_date: {
    type: Date,
    required: "Finish date required"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Module', moduleSchema);
