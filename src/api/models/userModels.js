const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema;

let userSchema = new Schema({
  first_name: {
    type: String,
    required: "Firstname required"
  },
  last_name: {
    type: String,
    required: "Lastname required"
  },
  email: {
    type: String,
    required: "Email required"
  },
  password: {
    type: String,
    required: "Password required"
  },
  session: {
    type: Integer,
    required: "Year required"
  },
  is_intervenant: {
    type: Boolean,
  },
  is_admin: {
    type: Boolean,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('User', userSchema);
