const User = require('../models/User');

exports.searchDonors = async (req, res) => {
  try {
    const { bloodGroup, location } = req.query;
    const filters = { role: 'donor' };
    if (bloodGroup) filters.bloodGroup = bloodGroup;
    if (location) filters.location = new RegExp(location, 'i');

    const donors = await User.find(filters).select('-password').sort({ createdAt: -1 });
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
