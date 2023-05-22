const APModel = require("../models/appointmentModel");
const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel");

let nanoid;
import('nanoid').then((module) => {
  nanoid = module.nanoid;
});

//post callback
const postAPController = async (req, res) => {

  const { userId, doctorId } = req.body;
  const user = await userModel.findOne({ _id:userId });
  const doctor = await doctorModel.findOne({ doctorId:doctorId });

    try {
        const exisitingUser = await userModel.findOne({ _id:req.body.userId });
      if (!exisitingUser) {
        return res
          .status(404)
          .send({ message: "No user exist by this Id", success: false });
      }
      
      const newAppointment = new APModel(req.body);
      await newAppointment.save();
      res.status(201).send({ message: "Post Sucessfully", success: true , appointmentId: newAppointment.appointmentId});
    }
     catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Post Controller ${error.message}`,
      });
    }
  };

//get  apointments by appointmentId
const getAPController = async (req,res)=>{

    const { appointmentId } = req.method == "GET" ? req.query : req.body;
  
    try {
      const appointment = await APModel.findOne({ appointmentId:  appointmentId});
      res.status(200).send({ success: true, data: {appointment}});
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  }


  //update booking slot
const setBookingSlotController = async (req, res) => {
  
  const { appointmentId } = req.query;
  const { date, time } = req.body.timeSlot;
  try {
    const appointment = await APModel.findOne({ appointmentId:  appointmentId});
    if (!appointment) {
      return res
        .status(404)
        .send({ message: "No appointment exist by this Id", success: false });
    }
    appointment.timeSlot = { date, time };
    //appointment.roomId = nanoid;
    await appointment.save();
    res.status(201).send({ message: "Booked Sucessfully", success: true});
  }
   catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Post Controller ${error.message}`,
    });
  }
};

const getRoomId = async  (req,res) => {
  const { appointmentId } = req.query;

  try {
    const appointment = await APModel.findOne({ appointmentId:  appointmentId});
    if (!appointment) {
      return res
        .status(404)
        .send({ message: "No appointment exist by this Id", success: false });
    }

    const roomId = appointment.roomId;
    res.status(200).send({ success: true, data: roomId});

  }
    catch(error){
      console.log(error);
    res.status(500).send({
      success: false,
      message: `Post Controller ${error.message}`,
    });
    }
}

  module.exports = {postAPController,
    getAPController,
    setBookingSlotController, getRoomId};