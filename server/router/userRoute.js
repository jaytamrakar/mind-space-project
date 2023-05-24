const express = require('express');
const router = express.Router();

//controllers
const {registerUserController, 
    loginUserController,
    verifyUserController,
    verifyEmail,
    getUserController, 
    applyDoctorController,
    updateUserController} = require('../controller/userController');

const {sendMailController, sendOTPMailController} = require('../controller/mailController');

const {generateOTP,
    verifyOTP,
    resetSession,} = require('../controller/otpController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');



//POST
router.route('/register').post(registerUserController);
router.route('/login').post(loginUserController);
router.route('/getUserData').post(authMiddleware, verifyUserController);
router.route('/applyDoctor').post(authMiddleware,applyDoctorController);

 //autherization check
router.route('/authenticate').post(verifyUserController, (req, res) => res.end()); 
router.route('/sendMail').post(sendMailController);
router.route('/sendMail/OTP').post(localOtpVariable, sendOTPMailController);

//GET
router.route('/generateOTP').get(verifyEmail, localOtpVariable, generateOTP) // generate random OTP
router.route('/verifyOTP').get(verifyEmail, verifyOTP) // verify generated OTP 
router.route('/resetSession').get(resetSession)
router.route('/').get(verifyEmail,getUserController)

//PUT
router.route('/update').put(authMiddleware,updateUserController)

module.exports = router;