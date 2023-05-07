const mongoose = require("mongoose");
const userModel = require('./userModel');
const doctorModel = require('./doctorModel');
const feedbackModel = require('./feedbackModel');

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
      },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctorModel',
      },
    userInfo: {
        type: String,
    },
    doctorInfo: {
        type: String,
    },
    timeSlot: {
        type: String,
        required: true,
    },
    bookedAt: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    feedback: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feedbackModel',
    },
    webRTC: {
        type: Object,
        required: true,
    },
    payment: {
        type: Object,
        required: true,
    },
})

const appointmentModel = mongoose.model("appointments", appointmentSchema);
  
module.exports = appointmentModel;
  