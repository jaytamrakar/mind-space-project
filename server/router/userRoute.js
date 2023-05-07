const express = require('express');
const router = express.Router();

const {registerUserController, 
    loginUserController} = require('../controller/userController');



router.route('/register').post(registerUserController);
router.route('/login').post(loginUserController);

module.exports = router;