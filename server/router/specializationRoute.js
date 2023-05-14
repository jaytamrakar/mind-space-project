const express = require('express');
const router = express.Router();

//controllers
const {postSPController,
    getSPController, } = require('../controller/specializationController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/post').post(postSPController);

//GET
router.route('/').get(getSPController);

module.exports = router;
