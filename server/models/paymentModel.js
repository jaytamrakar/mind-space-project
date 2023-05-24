const mongoose = require("mongoose");

// let nanoid;
// import('nanoid').then((module) => {
//   nanoid = module.nanoid;
// });

const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
  });

const paymentModel = mongoose.model("payemnts", paymentSchema);

module.exports = paymentModel;