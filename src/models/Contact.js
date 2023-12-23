const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  name: String,
  phoneNumber: String,
  relation: String,
});

module.exports = mongoose.model('Contact', ContactSchema);
