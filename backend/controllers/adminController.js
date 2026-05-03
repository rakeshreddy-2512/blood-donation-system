const User = require('../models/User');
const EmergencyRequest = require('../models/EmergencyRequest');

exports.dashboard = async (_req, res) => {
  try {
    const [donors, admins, openRequests, totalRequests] = await Promise.all([
      User.countDocuments({ role: 'donor' }),
      User.countDocuments({ role: 'admin' }),
      EmergencyRequest.countDocuments({ status: 'open' }),
      EmergencyRequest.countDocuments()
    ]);

    res.json({ donors, admins, openRequests, totalRequests });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
