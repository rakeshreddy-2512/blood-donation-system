const mongoose = require('mongoose');

const emergencyRequestSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    hospital: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true
    },
    unitsNeeded: { type: Number, required: true },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    location: { type: String, required: true },
    urgency: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'high' },
    status: { type: String, enum: ['open', 'fulfilled'], default: 'open' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('EmergencyRequest', emergencyRequestSchema);
