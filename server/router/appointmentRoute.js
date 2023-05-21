const express = require('express');
const router = express.Router();

//controllers
const {postAPController,
    getAPController,
    setBookingSlotController,getRoomId } = require('../controller/appointmentController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/post').post(postAPController);

//GET
router.route('/').get(getAPController);
router.route('/roomId').get(getRoomId);

//PUT
router.route('/setBooking').put(setBookingSlotController);

module.exports = router;
