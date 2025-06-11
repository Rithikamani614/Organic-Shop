const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/adminController');

router.post('/login', loginAdmin); // This enables /api/admin/login

module.exports = router;
