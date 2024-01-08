const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model('Post', UserSchema); // export
