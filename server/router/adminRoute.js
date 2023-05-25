const express = require('express');
const router = express.Router();

//controllers
const {registerAdminController,
    getAdminController, 
    verifyEmail,
    loginAdminController,
    getAllDoctorsController,
    getAllUsersController,
    changeDoctorStatusController,
    deleteDoctorController,
    getAllPendingDoctorsController,
    getAllBlockUsersController,
    blockUserController,
    blockDoctorController,} = require('../controller/adminController');

//middlewares
const {authMiddleware, 
    localOtpVariable} = require('../middlewares/authMiddleware.js');

//POST
router.route('/register').post(registerAdminController);
router.route('/login').post(loginAdminController);

//GET
router.route('/').get(verifyEmail, getAdminController);
router.route('/doctors').get(getAllDoctorsController);
router.route('/users').get(getAllUsersController);
router.route('/doctors/pending').get(getAllPendingDoctorsController);
router.route('/users/block').get(getAllBlockUsersController);

//PUT
router.route('/changeStatus').put(changeDoctorStatusController);
router.route('/blockDoctor').put(blockDoctorController);
router.route('/blockUser').put(authMiddleware,blockUserController);

//DELETE
router.route('/deleteDoctor').delete(deleteDoctorController);

module.exports = router;