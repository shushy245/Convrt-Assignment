const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true
  },
  credits: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;