const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  preferences: {
    type: [String], // List of preference categories
    default: []
  },
  bio: {
    type: String
  },
  social: {
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String }
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
