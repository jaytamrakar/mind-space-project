const JWT = require("jsonwebtoken");


// authorization middleware functiom
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(400).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};

//localvariable fucntion for otp generation
const localOtpVariable = async (req, res, next) =>{
  req.app.locals = {
      OTP : null,
      resetSession : false
  }
  next();
}

module.exports = {authMiddleware,
  localOtpVariable};
