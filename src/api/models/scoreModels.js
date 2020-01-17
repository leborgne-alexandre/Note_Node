const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema;

let scoreSchema = new Schema({
  id_intervenant: {
    type: String,
    required: "Intervenant id required"
  },
  id_module: {
    type: String,
    required: "Module ir required"
  },
  score: {
    type: Number,
  },
  message: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Score', scoreSchema);
