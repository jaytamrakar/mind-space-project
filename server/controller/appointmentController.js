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
      res.status(201).send({ message: "Post Sucessfully", success: true });
    }
     catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Post Controller ${error.message}`,
      });
    }
  };

//get  apointments by user
const getAPController = async (req,res)=>{

    const { user_id } = req.method == "GET" ? req.query : req.body;
  
    try {
      const appointments = await APModel.find({ userId:  user_id});
//      const user = await userModel.findById(user_id);
      res.status(200).send({ success: true, data: {appointments}});
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  }

  module.exports = {postAPController,
    getAPController};