const feedbackModel = require("../models/feedbackModel");
const userModel = require("../models/userModel");

//post callback
const postFeedbackController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ _id:req.body.user });
      if (!exisitingUser) {
        return res
          .status(404)
          .send({ message: "No user exist by this Id", success: false });
      }
      
      const newFeedback = new feedbackModel(req.body);
      await newFeedback.save();
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

//get  feedbacks by user
const getFeedbackController = async (req,res)=>{

    const { user_id } = req.method == "GET" ? req.query : req.body;
  
    try {
      const feedbacks = await feedbackModel.find({ user:  user_id});
      res.status(200).send({ success: true, data: feedbacks });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  
  }



module.exports = {postFeedbackController,
    getFeedbackController};