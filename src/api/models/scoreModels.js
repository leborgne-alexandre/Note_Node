const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema;

let scoreSchema = new Schema({
  id_student: {
    type: Integer,
    required: "Student id required"
  },
  id_module: {
    type: Integer,
    required: "Module ir required"
  },
  score: {
    type: Double,
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
