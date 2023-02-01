const asyncWrapper  = require("../helpers/asyncWrapper")
const {  validateDailing } = require("../validators/index")
const dailingModel = require("../db/models/dailing")
const {sendError } = require("../helpers/sendError")
const successStatus = require("../helpers/successStatus")
const {StatusCodes}  = require("http-status-codes")
const dailing = require("../db/models/dailing")



const createDailing = asyncWrapper(async (req ,res)=>{
// the rate should be between 0 and 5    
if(req.body.rate < 0 || req.body.rate > 5 )sendError(res , StatusCodes.OK , "rate is not valible")

// the user should provide at least one information about his day
if(!req.body.rate && !req.body.desc && !req.body.importantEvents.length) sendError(res , StatusCodes.BAD_REQUEST , "you should provide at least one label ( rate , descreption or oneImportant event ) ")
const {value : dailing } = validateDailing(req.body)
const date = req.body.date || new Date().toISOString()
delete dailing.date

// createing a unique day from the date inorder to store it uniquely in the database so we don't get a dublicate days
const day = date.slice( 0 , 10) 
const newDailing  = await  dailingModel.create({user : req.user._id , day  , ...dailing })
if(!newDailing) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not create the dailing in our database") ; 
successStatus(res , StatusCodes.CREATED , newDailing )
})

const deleteDailing = asyncWrapper(async(req , res)=>{

// the user can only delete the dailing of the current day
if(!req.params.id) sendError(res , StatusCodes.BAD_REQUEST , "you didn't provide an id for the dailing")  ; 
const date = new Date().toISOString()
const currDay = date.slice( 0 , 10) 
  
// the user can only delete the productivity of the current day
// deleting the productivity from the db
await dailingModel.findOneAndDelete({_id: req.params.id , user: req.user._id , day : currDay })
successStatus(res , StatusCodes.OK  , "prod deleted")
})

const updateDayling = asyncWrapper(async (req , res)=>{
if(req.body.rate < 0 || req.body.rate > 5) sendError(res , StatusCodes.BAD_REQUEST , "rate is not valid")
if(!req.params.id) sendError(res , StatusCodes.BAD_REQUEST , "the id of the dailing is missing")

// the user can only update the dailing of the current day
const currDay  = new Date().toISOString().slice(0  , 10)
if(req.body.date && req.body.date.toISOString().slice(0 , 10) !== currDay) sendError(res , StatusCodes.BAD_REQUEST , "you can only update the dayling of the current day")
const newDailing = await dailingModel.findOneAndUpdate({_id : req.params.id , user : req.user._id , day :currDay  } , {...req.body} , {new : true} )
if(!newDailing) sendError(res , StatusCodes.BAD_REQUEST , "can not update the dayling in our database")
successStatus(res , StatusCodes.OK , newDailing )
})

const getDaylings = asyncWrapper(async (req ,res)=>{
    const daylings = await dailingModel.find({ user : req.user._id  } )  
    if(!daylings) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not dailing for that user")
    successStatus(res , StatusCodes.OK , daylings)
})

module.exports = {getDaylings , deleteDailing , createDailing  , updateDayling }