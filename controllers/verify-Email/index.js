const asyncWraper = require("../../helpers/asyncWrapper")
const sendEmailFn = require("./sendEmail") ; 
const succussStatus = require('../../helpers/successStatus')
const {StatusCodes} = require("http-status-codes");
const { sendError } = require("../../helpers/sendError");
const userConfirmFn = require("./confirmEmail")
const sendEmail = asyncWraper(async (req , res)=>{
const  result = await sendEmailFn(req.user , res)   ;
if(!result) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not send email ")
succussStatus(res  , StatusCodes.OK  , "please check your email"  )     ; 
})


const confirmEmail = asyncWraper(async (req , res)=>{
const {success , error}= await confirmEmail( req.query.user , req.query.token )  ; 
if(error) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR , error )
res.redirect("/login")
})

 
module.exports = sendEmail ; 