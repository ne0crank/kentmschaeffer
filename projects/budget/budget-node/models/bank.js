const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Bank',BankSchema)
