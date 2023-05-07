const mongoose = require("mongoose");
const userModel = require('./userModel');

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
   },
    content: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
    },
})

const feedbackModel = mongoose.model("feedbacks", feedbackSchema);
  
module.exports = feedbackModel;