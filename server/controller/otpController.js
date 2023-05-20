const otpGenerator = require('otp-generator');


//reset session after OTP verification
const resetSession = async (req,res)=>{
    if(req.app.locals.resetSession){
         return res.status(201).send({ flag : req.app.locals.resetSession})
    }
    return res.status(440).send({error : "Session expired!"})
 }

// generate OTP
const generateOTP = async (req,res) =>{
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false});
    //process.env.OTP = req.app.locals.OTP;
    res.status(201).send({ code: req.app.locals.OTP })
}

// verify OTP
const verifyOTP = async (req,res) =>{
    const { code } = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"});
}

module.exports = {
    generateOTP,
    verifyOTP,
    resetSession,};