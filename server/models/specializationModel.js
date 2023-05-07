const mongoose = require("mongoose");
const doctorModel = require('./doctorModel');

const specializationSchema = new mongoose.Schema({
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctorModel',
    }],
    category: {
        type: String,
        required: true,
    }
})

const specializationModel = mongoose.model("specializations", specializationSchema);
  
module.exports = specializationModel;