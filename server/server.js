const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const Razorpay = require("razorpay");
const connectDB = require("./database/db");
const userRoute = require('./router/userRoute');
const doctorRoute = require('./router/doctorRoute');
const adminRoute = require('./router/adminRoute');
const feedbackRoute = require('./router/feedbackRoute');
const specializationRoute = require('./router/specializationRoute');
const appointmentRoute = require('./router/appointmentRoute');
const notificationRoute = require('./router/notificationRoute');
const paymentRoute = require('./router/paymentRoute');


//webRTC
const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//razorpay 
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use('/api/user',userRoute);
app.use('/api/doctor',doctorRoute);
app.use('/api/admin',adminRoute);
app.use('/api/feedback',feedbackRoute);
app.use('/api/specialization',specializationRoute);
app.use('/api/appointment',appointmentRoute);
app.use('/api/notification',notificationRoute);
app.use('/api/payment',paymentRoute);

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});

//ctrl();
module.exports = {instance};