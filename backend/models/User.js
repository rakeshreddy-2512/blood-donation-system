const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['donor', 'admin'], default: 'donor' },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true
    },
    phone: { type: String },
    location: { type: String, required: true },
    lastDonationDate: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
