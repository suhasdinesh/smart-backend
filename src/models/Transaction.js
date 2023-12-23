const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  amount: Number,
  transactionType: {
    type: String,
    enum: ['recharge', 'call'],
  },
},{timestamps : true});

module.exports = mongoose.model('Transaction', TransactionSchema);
