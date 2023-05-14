const notifiModel = require("../models/notificationModel");

//post callback
const postNotificationController = async (req, res) => {
    try {
       
      const newNotification = new notifiModel(req.body);
      await newNotification.save();
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

//get all notification
const getAllNotificationController = async (req,res) =>{
    try{
        const notifications = await notifiModel.find();
        res.status(200).send({ success: true, data: notifications });
    }   
    catch (error) {
        console.log(error);
        res.status(500).send({
          message: "auth error",
          success: false,
          error,
        });
      }
  }

  module.exports = {getAllNotificationController,
    postNotificationController};

