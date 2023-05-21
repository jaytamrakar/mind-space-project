const mongoose = require("mongoose");
const userModel = require('./userModel');
const doctorModel = require('./doctorModel');
const feedbackModel = require('./feedbackModel');

let nanoid;
import('nanoid').then((module) => {
  nanoid = module.nanoid;
});


const appointmentSchema = new mongoose.Schema({
    appointmentId: {
        type: String,
        default: () => nanoid(), // Generate a unique ID using nanoid
        },
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
        type: Object
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
    roomId: {
        type: String,
        default: () => nanoid(), // Generate a unique ID using nanoid
    },
    payment: {
        type: Object,
        required: true,
    },
})

const appointmentModel = mongoose.model("appointments", appointmentSchema);
  
module.exports = appointmentModel;
  