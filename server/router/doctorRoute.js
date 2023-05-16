const express = require('express');
const router = express.Router();

//controllers
const {registerDoctorController,
    getDoctorController, 
    verifyEmail} = require('../controller/doctorController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/register').post(registerDoctorController);

//GET
router.route('/').get(verifyEmail,getDoctorController);

module.exports = router;
