const adminModel = require("../models/adminModel");
const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register callback
const registerAdminController = async (req, res) => {
    try {
      const exisitingAdmin = await adminModel.findOne({ email: req.body.email });
      if (exisitingAdmin) {
        return res
          .status(404)
          .send({ message: "Admin Already Exist", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newAdmin = new adminModel(req.body);
      await newAdmin.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    }
     catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };

// login callback
const loginAdminController = async (req, res) => {
    try {
      const admin = await adminModel.findOne({ email: req.body.email });
      if (!admin) {
        return res
          .status(404)
          .send({ message: "Admin not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, admin.password);
      if (!isMatch) {
        return res
          .status(412)
          .send({ message: "Invalid Email or Password", success: false });
      }
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  };

// verify email
const verifyEmail = async(req, res, next)=>{
    try {
        
        const { adminemail } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await adminModel.findOne({ email: adminemail });
        if(!exist) return res.status(404).send({ error : "Can't find Doctor!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}

//get specific admin by email
const getAdminController = async (req,res)=>{

    const { adminemail } = req.method == "GET" ? req.query : req.body;
  
    try {
      const admin = await adminModel.findOne({ email: adminemail });
      res.status(200).send({ success: true, data: admin });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
}

const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send({
            success: true,
            message: "List of all Users",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr while fetching users",
            error,
        });
    }
};

const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find();
        res.status(200).send({
            success: true,
            message: "List of all Doctors",
            data: doctors,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while fetching doctors",
            error,
        });
    }
};

// doctor account status
const changeDoctorStatusController = async (req, res) => {
  try{
    const { doctorId } = req.body;
    const doctor = await doctorModel.findOne({doctorId:doctorId});
    doctor.status = true
    // const user = await userModel.findById({ _id: req.body.userId });
    // user.isDoctor = true;
    await doctor.save();
    res.status(200).send({
      success: true,
      message: "Doctor Status Updated",
      data: doctor,
  });
  } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Error in updating doctor status",
        error,
    });
  }
}



module.exports = {registerAdminController,
    getAdminController, verifyEmail,
    loginAdminController,
    getAllUsersController,
    getAllDoctorsController,
    changeDoctorStatusController};