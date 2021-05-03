const mongoose = require('mongoose');
const Budget = require('./budget');
const Bank = require('./bank');
const User = require('./user');

const TransactionSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
    unique: true
  },
  bank: {
    type: [Bank.schema],
    required: false,
    default: []
  },
  budget: {
    type: [Budget.schema],
    required: true,
    default: []
  },
  user: {
    type: [User.Schema],
    required: true,
    default: []
  },
  firm: {
    type: String,
    required: true,
    default: []
  },
  amount: {
    type: Number,
    required: true
  },
  posted: {
    type: Boolean
  },
}, { timestamps: true });

module.exports = mongoose.model('Transaction',TransactionSchema);
