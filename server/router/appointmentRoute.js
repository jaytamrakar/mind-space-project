const express = require('express');
const router = express.Router();

//controllers
const {postAPController,
    getAPController, } = require('../controller/appointmentController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/post').post(postAPController);

//GET
router.route('/').get(getAPController);

module.exports = router;
