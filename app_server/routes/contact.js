var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact');


/* GET Contact page. */
router.get('/', controller.contact );

module.exports = router;
