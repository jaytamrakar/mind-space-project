const mongoose = require("mongoose");
const appointmentModel = require('./appointmentModel');
const notificationModel = require('./notificationModel');

const userSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    isDoctor: {
        type: Boolean,
        default: false,
        required: false,
    },
    isBlock: {
        type: Boolean,
        default: false,
        required: false,
    },
    displayPicture: {
        type: String,
    //    required: true,
    },
    userHisory: {
        type: String,
        required: false,
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appointmentModel',
    }],
    notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notificationModel',
    }],
  });
  
  const userModel = mongoose.model("users", userSchema);
  
  module.exports = userModel;

  