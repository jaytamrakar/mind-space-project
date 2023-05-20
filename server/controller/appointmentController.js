const APModel = require("../models/appointmentModel");
const userModel = require("../models/userModel");

//post callback
const postAPController = async (req, res) => {
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

  module.exports = {postAPController,
    getAPController,
    setBookingSlotController};