const express = require('express');
const router = express.Router();

const jarvisController = require('../controllers/jarvisController');
router.get("/",jarvisController.example);

module.exports = router;