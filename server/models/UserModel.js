const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: [String],
    default: ['user']
  }
});

const User = mongoose.model('user', userSchema);
module.exports = { User }