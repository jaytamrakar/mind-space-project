const express = require('express');
const router = express.Router();

//controllers
const {registerDoctorController,
    getDoctorController, 
    verifyEmail, getDoctorCardController} = require('../controller/doctorController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/register').post(registerDoctorController);

//GET doctor by nano id
router.route('/').get(getDoctorController);
// get doctor for card
router.route('/getCardInfo').get(getDoctorCardController);

module.exports = router;
