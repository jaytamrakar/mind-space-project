const mongoose = require("mongoose");
//const { nanoid } = require('nanoid');
const appointmentModel = require('./appointmentModel');
const notificationModel = require('./notificationModel');
const specializationModel = require('./specializationModel');
const feedbackModel = require('./feedbackModel');

let nanoid;
import('nanoid').then((module) => {
  nanoid = module.nanoid;
});

const doctorSchema = new mongoose.Schema({
    doctorId: {
    type: String,
    default: () => nanoid(), // Generate a unique ID using nanoid
    },
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last name"],
    },
    email: {
      type: String,
      required : [true, "Please provide a unique email"],
      unique: true,
    },
    website: {
        type: String,
        required : false,
        unique: true,
    },
    experience: {
        type: Number,
        required : [true, "Please provide experience"],
    },
    expertise: {
        type: Number,
    },
    qualification: {
        type: String,
        required: [true, "Please provide qualifications"],
    },
    displayPicture: {
        type: String,
        required: true,
    },
    isBlock: {
        type: Boolean,
        default: false,
    },
    about: {
        type: String,
    },
    isAvalaible: {
        type: Boolean,
        default: true,
    },
    specializations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'specializationModel',
    }],
    timeSlots: {
        type: [String],
        required: true,
    },
    languages: {
        type: [String],
        required: true,
    },
    feedbacks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feedbackModel',
    }],
    appointments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'appointmentModel',
    }],
    notifications: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notificationModel',
    }],
  });
  
  const doctorModel = mongoose.model("doctors", doctorSchema);
  
  module.exports = doctorModel;
  