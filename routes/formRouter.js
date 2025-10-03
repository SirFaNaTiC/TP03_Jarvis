const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');
// Route pour afficher le formulaire
router.get('/', formController.showForm);

router.post('/', formController.handleFormSubmission);

module.exports = router;