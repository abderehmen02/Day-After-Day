const nodemailer = require('nodemailer');
const {EMAIL , EMAIL_PASSWORD  ,URL , EMAIL_TOKEN_SECRET } = require("../../config/default")
const jwt = require("jsonwebtoken")
const asyncWraper = require("../../helpers/asyncWrapper")
const sendMail = asyncWraper( async (receiver)=>{
const token = jwt.sign(receiver , EMAIL_TOKEN_SECRET)  ; 
const link = `${URL}/api/confirmEmail/^${token}`
// setting the html to send
const html =  `
<h3> welcome to Day-After-Day </h3>
<ph3>please confirm your email by clicking this link${link}</p>
<p> our app will help you managae your day and increase your productivity </p>
` 
    
let transporter = nodemailer.createTransport({
    host: 'mail.YOURDOMAIN.com',
    port: 587,
    secure: false,
    auth: {
        user:  EMAIL , 
        pass:  EMAIL_PASSWORD 
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'DAY-AFTER-DAY', // sender address
      to: receiver.email, // list of receivers
      subject: 'Confirm Your Account', // Subject line
      text: `Hello ${receiver.fullName}`, // plain text body
      html 
  };

  // send mail with defined transport object
 const result = await  transporter.sendMail(mailOptions);
  return result 
})
module.exports = sendMail 