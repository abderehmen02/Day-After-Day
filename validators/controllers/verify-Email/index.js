const asyncWraper = require("../../helpers/asyncWrapper")
const sendEmailFn = require("./sendEmail") ; 
const succussStatus = require('../../helpers/successStatus')
const {StatusCodes} = require("http-status-codes");
const { sendError } = require("../../helpers/sendError");
const confirmEmailFn = require("./confirmEmail")

const sendEmail = asyncWraper(async (req , res , next)=>{
const  result = await sendEmailFn(req.body)   ;
if(!result) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not send email ")
next()
})


const confirmEmail = asyncWraper(async (req , res)=>{
const {success , error}= await confirmEmailFn( req.query.user , req.query.token )  ; 
if(error) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR , error )
res.redirect("/login")
})

 
  module.exports = {sendEmail , confirmEmail}