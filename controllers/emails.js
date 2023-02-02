const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");
const { EMAIL_SENDER, EMAIL_RECEIVER, EMAIL_SENDER_PASSWORD, MONGO_DB_CONNECT } = require("../config/default");
const successStatus = require("../helpers/successStatus");


// send me an email when someone visit Day After Day

const sendVisitingEmail = async (req , res)=>{

//     let transporter = nodemailer.createTransport({
//         service : 'gmail'  ,
//         auth : {
//             user : EMAIL_SENDER ,
//             pass : EMAIL_SENDER_PASSWORD
//         }
// });
//  await transporter.sendMail({
//     from: EMAIL_SENDER,
//     to: EMAIL_RECEIVER,
//     subject: 'visit day after day',
//     text:  ` durration : ${req.body.durration}`
// }, (err, info) => {
//     if(info){
//     successStatus(res , StatusCodes.OK , 'email sen')
// }
//     if(err)    console.log(err)
// });
successStatus(res , StatusCodes.OK , 'the service is currently holded due to development work')
}


module.exports = {sendVisitingEmail}