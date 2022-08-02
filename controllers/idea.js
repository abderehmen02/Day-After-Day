const ideaModel = require("../db/models/newIdea")
const asyncWrapper = require("../helpers/asyncWrapper")
const {StatusCodes} = require('http-status-codes')
const {sendError } =  require("../helpers/sendError")
const createNewIdea =asyncWrapper(  async (req , res)=>{
if(!req.body.text) { sendError(res , StatusCodes.BAD_REQUEST  , 'text does not exist' )  } 
console.log(req.user._id)
console.log("user req")
console.log(req.user)
console.log(res.cookies.day-afer-day)
const newUser = await   ideaModel.create({ ...req.body , user : req.user._id })
res.status(201).json(newUser)
} )
module.exports = {createNewIdea}