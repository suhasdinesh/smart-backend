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
  // Other fields can be added as needed
});

module.exports = mongoose.model('Contact', ContactSchema);
