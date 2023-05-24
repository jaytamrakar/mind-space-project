const doctorModel = require("../models/doctorModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register callback
const registerDoctorController = async (req, res) => {
    try {
      const exisitingDoctor = await doctorModel.findOne({ email: req.body.email });
      if (exisitingDoctor) {
        return res
          .status(404)
          .send({ message: "Doctor Already Exist", success: false });
      }
      
      const newDoctor = new doctorModel(req.body);
      await newDoctor.save();
      res.status(201).send({ message: "Register Sucessfully", success: true , doctorId: newDoctor.doctorId});
    }
     catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };

 // verify email
 const verifyEmail = async(req, res, next)=>{
    try {
        
        const { doctoremail } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await doctorModel.findOne({ email: doctoremail });
        if(!exist) return res.status(404).send({ error : "Can't find Doctor!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}

//get specific doctor by nano id
const getDoctorController = async (req,res)=>{

    //const { doctorId } = req.method == "GET" ? req.query : req.body;
  
    try {
      const doctor = await doctorModel.findOne({ userId: req.body.userId });
      res.status(200).send({ success: true, data: doctor });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  
  }

  const getAllDoctorsController = async (req, res) => {
    try {
      const doctors = await doctorModel.find({status: true});
      res.status(200).send({ success: true, data: doctors });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error retrieving doctors",
        success: false,
        error,
      });
    }
  };

//get specific doctor card by nano id
const getDoctorCardController = async (req,res)=>{

  const { doctorId } = req.method == "GET" ? req.query : req.body;

  try {
    const doctor = await doctorModel.findOne({ doctorId: doctorId });
    const card ={
      img: doctor.displayPicture,
      name: doctor.firstName + ' ' + doctor.lastName,
      qualification: doctor.qualification,
      specialization: doctor.specialization,
      experience: doctor.experience,
    }
    res.status(200).send({ success: true, data: card });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }

}

  module.exports = {registerDoctorController,
    getDoctorController, verifyEmail,
    getDoctorCardController, getAllDoctorsController};