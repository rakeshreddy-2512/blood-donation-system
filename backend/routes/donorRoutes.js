const router = require('express').Router();
const { searchDonors } = require('../controllers/donorController');

router.get('/search', searchDonors);

module.exports = router;
