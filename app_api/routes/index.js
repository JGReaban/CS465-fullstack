const express = require('express');  // Express app used
const router = express.Router(); // Router logic

// Import the Controllers used for site
const tripsController = require('../controllers/trips');

// Define routes for trips endpoint

// Get method for entire routes triplist
router
    .route('/trips')
    .get(tripsController.tripsList);
  
// Get method for routes tripsFindByCode, require code parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); 


module.exports = router;