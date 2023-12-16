const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['superadmin', 'schooladmin'],
    required: true
  },
  // Additional fields can be included as needed
  // If school admins are associated with a specific school, you can include a reference to the School model
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School'
  }
}, {timestamps : true});

module.exports = mongoose.model('User', UserSchema);
