const express = require('express');
const router = express.Router();

//controllers
const {registerDoctorController,
    getDoctorController, 
    verifyEmail, getDoctorCardController,
    getAllDoctorsController} = require('../controller/doctorController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/register').post(registerDoctorController);

//GET all doctors
router.route('/all').get(getAllDoctorsController);

//GET doctor by nano id
router.route('/').get(authMiddleware,getDoctorController);

// get doctor for card
router.route('/getCardInfo').get(getDoctorCardController);

module.exports = router;
