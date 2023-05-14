const express = require('express');
const router = express.Router();

//controllers
const {postFeedbackController,
    getFeedbackController, } = require('../controller/feedbackController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/post').post(postFeedbackController);

//GET
router.route('/').get(getFeedbackController);

module.exports = router;
