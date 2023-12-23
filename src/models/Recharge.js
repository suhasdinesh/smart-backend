const mongoose = require('mongoose');

const RechargeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default : 0,
  },
  // Other fields can be added as needed
},{timestamps : true});

module.exports = mongoose.model('Recharge', RechargeSchema);
