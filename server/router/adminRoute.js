const express = require('express');
const router = express.Router();

//controllers
const {registerAdminController,
    getAdminController, 
    verifyEmail,
    loginAdminController} = require('../controller/adminController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/register').post(registerAdminController);
router.route('/login').post(loginAdminController);

//GET
router.route('/').get(verifyEmail, getAdminController);

module.exports = router;