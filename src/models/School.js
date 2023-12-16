const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model for admins
  },
},{timestamps : true});

module.exports = mongoose.model('School', SchoolSchema);
