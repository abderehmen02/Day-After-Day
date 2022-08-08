const nodemailer = require('nodemailer');
const {EMAIL , EMAIL_PASSWORD  ,URL , EMAIL_TOKEN_SECRET } = require("../../config/default")
const jwt = require("jsonwebtoken")
const asyncWraper = require("../../helpers/asyncWrapper")
const sendMail = asyncWraper( async (receiver)=>{
  console.log("send email function")
const token = jwt.sign(receiver , EMAIL_TOKEN_SECRET)  ; 
const link = `${URL}/api/confirmEmail/^${token}`
// setting the html to send
const html =  `
<h3> welcome to Day-After-Day </h3>
<ph3>please confirm your email by clicking this link${link}</p>
<p> our app will help you managae your day and increase your productivity </p>
` 
    console.log("token link")
    console.log(token , link)
    console.log(EMAIL)
    console.log("email")
    console.log(EMAIL_PASSWORD)
let transporter = nodemailer.createTransport({
  service : "gmail"  , 
    auth: {
        user:  EMAIL , 
        pass:  EMAIL_PASSWORD 
    }
  });
console.log("transporter")
console.log(transporter)
  // setup email data with unicode symbols
let mailOptions = {
      from: EMAIL, // sender address
      to: 'ilahalaha0987@gmail.com', // list of receivers
      subject: 'Confirm Your Account', // Subject line
      text: `Hello ${receiver.fullName}`, // plain text body
      html 
  };
console.log("mailoptions")
console.log(mailOptions)
// send mail with defined transport object
console.log("sending email")
const result = await transporter.sendMail(mailOptions);
console.log("result")
console.log(result)
  return result 
})
module.exports = sendMail 