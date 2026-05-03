const router = require('express').Router();
const { createRequest, getRequests, updateStatus } = require('../controllers/emergencyController');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', getRequests);
router.post('/', protect, createRequest);
router.patch('/:id/status', protect, adminOnly, updateStatus);

module.exports = router;
