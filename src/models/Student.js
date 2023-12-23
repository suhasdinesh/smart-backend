const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
  },
  rfidCardId: String,
  balance: Number,
  
},{timestamps : true});

module.exports = mongoose.model('Student', StudentSchema);
