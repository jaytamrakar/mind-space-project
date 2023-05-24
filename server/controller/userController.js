const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const otpGenerator = require('otp-generator');


//register callback
const registerUserController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      if (exisitingUser) {
        return res
          .status(404)
          .send({ message: "User Already Exist", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    }
     catch (error) {
      console.log(error);
      res.status(500).send  ({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };

// login callback
const loginUserController = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(404)
          .send({ message: "User not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(412)
          .send({ message: "Invalid Email or Password", success: false });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ message: "Login successful", success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  };

// verify user
const verifyUserController = async (req, res) => {
    try {
      const user = await userModel.findById({ _id: req.body.userId });
      user.password = undefined;
      if (!user) {
        return res.status(400).send({
          message: "user not found",
          success: false,
        });
      } else {
        res.status(200).send({
          success: true,
          data: user,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  };

  // verify email
const verifyEmail = async(req, res, next)=>{
    try {
        
        const { useremail } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await userModel.findOne({ email: useremail });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}

// verify OTP
const verifyOTP = async (req,res) =>{
    const { code } = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"});
}

//get specific user by email
const getUserController = async (req,res)=>{

  const { useremail } = req.method == "GET" ? req.query : req.body;

  try {
    const user = await userModel.findOne({ email: useremail });
    res.status(200).send({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }

}

//update profile call
const updateUserController = async (req, res) => {
  
try {
      const user = await userModel.findOneAndUpdate(
          { _id: req.body.userId },
          req.body,
          { new: true }
      );
      res.status(200).send({
          success: true,
          message: "User Profile Updated",
          data: user,
      });
  } catch (error) {
      console.log(error);
      res.status(500).send({
          success: false,
          message: "User Profile update failed",
          error,
      });
  }
};

const applyDoctorController = async (req, res) => {

  try{
    const newDoctor = new doctorModel(req.body);
    newDoctor.userId = req.body.userId;
    await newDoctor.save();
    res.status(201).send({ message: "Register Sucessfully", success: true , doctorId: newDoctor.doctorId});

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error whiile Applying For Doctor",
    });
  }
}

  module.exports = {registerUserController,
    loginUserController,
    verifyUserController,
    verifyOTP,verifyEmail,
    getUserController,
    applyDoctorController,
    updateUserController};