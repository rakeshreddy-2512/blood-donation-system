const EmergencyRequest = require('../models/EmergencyRequest');

exports.createRequest = async (req, res) => {
  try {
    const request = await EmergencyRequest.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await EmergencyRequest.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const updated = await EmergencyRequest.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
