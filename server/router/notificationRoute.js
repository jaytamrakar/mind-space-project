const express = require('express');
const router = express.Router();

//controllers
const {postNotificationController,
    getAllNotificationController, } = require('../controller/notificationController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/post').post(postNotificationController);

//GET
router.route('/').get(getAllNotificationController);

module.exports = router;
