const express = require('express');
const router = express.Router();

const expController = require('../controllers/expController');
router.get("/",expController.example);

module.exports = router;