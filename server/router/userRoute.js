const express = require('express');
const router = express.Router();

//controllers
const {registerUserController, 
    loginUserController,
    verifyUserController,
    generateOTP,
    verifyOTP,verifyEmail,
    resetSession} = require('../controller/userController');

const getBill = require('../controller/mailController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

    router.route('/product/getbill').post(getBill);

//POST
router.route('/register').post(registerUserController);
router.route('/login').post(loginUserController);
router.route('/getUserData').post(authMiddleware, verifyUserController); //autherization check

//GET
router.route('/generateOTP').get(verifyEmail, localOtpVariable, generateOTP) // generate random OTP
router.route('/verifyOTP').get(verifyEmail, verifyOTP) // verify generated OTP
router.route('/resetSession').get(resetSession)

module.exports = router;