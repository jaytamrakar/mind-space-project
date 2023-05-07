const mongoose = require("mongoose");
const userModel = require('./userModel');
const doctorModel = require('./doctorModel');
const appointmentModel = require('./appointmentModel');
const notificationModel = require('./notificationModel');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
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
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userModel',
  }],
    doctors: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctorModel',
  }],
    appointments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'appointmentModel',
  }],
    notifications: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notificationModel',
  }],
})

const adminModel = mongoose.model("admins", adminSchema);
  
module.exports = adminModel;