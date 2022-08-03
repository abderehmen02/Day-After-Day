const ideaModel = require("../db/models/newIdea")
const asyncWrapper = require("../helpers/asyncWrapper")
const {StatusCodes} = require('http-status-codes')
const {sendError } =  require("../helpers/sendError")
const {validateIdea} = require('../validators/index')
const createNewIdea =asyncWrapper(  async (req , res)=>{
// if(!req.body.text) { sendError(res , StatusCodes.BAD_REQUEST  , 'text does not exist' )  } 
const {value : ideaObj} = validateIdea(req.body)   ; 
const newUser = await   ideaModel.create({ ...ideaObj , user : req.user._doc._id })
res.status(201).json(newUser)
} )
module.exports = {createNewIdea}