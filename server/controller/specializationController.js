const SPModel = require("../models/specializationModel");


//post callback
const postSPController = async (req, res) => {
    try {
      
      const newSpecialition = new SPModel(req.body);
      await newSpecialition.save();
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

//get doctors by specialization
const getSPController = async (req,res)=>{

    const { category } = req.method == "GET" ? req.query : req.body;
  
    try {
      const doctors = await SPModel.find({ category:  category});
      res.status(200).send({ success: true, data: doctors });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  
  }



module.exports = {postSPController,
    getSPController};