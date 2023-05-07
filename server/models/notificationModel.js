const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    isSeen: {
        type: Boolean,
        default: false
    }
})

const notificationModel = mongoose.model("notifications", notificationSchema);
  
module.exports = notificationModel;