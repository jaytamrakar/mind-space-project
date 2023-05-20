const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const otpGenerator = require('otp-generator');


/** send mail from real gmail account */
const sendMailController = (req, res) => {

    const { userEmail } = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASS_KEY,
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Mail test",
            intro: "Your bill has arrived!",
            table : {
                data : [
                    {
                        item : "Nodemailer Stack Book",
                        description: "A Backend application",
                        price : "$10.99",
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : process.env.EMAIL,
        to : userEmail,
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Successfully...!");
}



const sendOTPMailController = async (req, res) => {

    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false});
    
    const code =req.app.locals.OTP;


        const { userEmail } = req.body;

        let config = {
            service : 'gmail',
            auth : {
                user: process.env.EMAIL,
                pass: process.env.PASS_KEY,
            }
        }

        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
            theme: "default",
            product : {
                name: "Mailgen",
                link : 'https://mailgen.js/'
            }
        })

        let response = {
            body: {
                name : "Mail test",
                intro: "You got an OTP",
                table : {
                    data : [
                        {
                            OTP:code.toString(),
                        }
                    ]
                },
                //outro: "E"
            }
        }

        let mail = MailGenerator.generate(response)

        let message = {
            from : process.env.EMAIL,
            to : userEmail,
            subject: "OTP verification",
            html: mail
        }

        transporter.sendMail(message).then(() => {
            return res.status(201).json({
                msg: "you should receive an email"
            })
        }).catch(error => {
            return res.status(500).json({ error })
        })

}

module.exports = {sendMailController, sendOTPMailController};
