const prodModel = require("../db/models/prod")
const asyncWrapper = require('../helpers/asyncWrapper')
const {prodValidator} = require("../validators/index")
const {sendErr} = require("../helpers/sendError")
const {StatusCodes} = require("http-status-codes")
const successStatus =  require("../helpers/successStatus")
// creating a productivity
const creatProd = asyncWrapper( async (req , res)=>{
if(!req.value) sendErr(res , StatusCodes.BAD_REQUEST , "there is no value for this productivity" )
const {value  :  prodObj} = prodValidator(req.body  )

// creating a unique date string to be able to store it uniquely in our data base so we can avoid dublicate days in our database
const day = req.date.getDay().toString() + req.date.getMonth().toString() + req.date.getFullYear().toString()
const newProd = await prodModel.create({user : req.user._id , day ,  ...prodObj})  ; 
if(!newProd) sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create the productivity')

successStatus(res , StatusCodes.CREATED  , newProd )
})




const deleteProd = asyncWrapper(async(req , res)=>{
// the user can only delete the productivity of the current year
if(!req.params.id) sendErr(res , StatusCodes.BAD_REQUEST , "you didn't provide an id for the productivity")  ; 
const currDay = new Date().getDay().req.date.getDay().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString() ; 

const prodObj = await prodModel.findById(req.params.id)

// the user can only delete the productivity of the current day
if(prodObj.date !== currDay) sendErr(res , StatusCodes.FORBIDDEN , "you can not delete the productivity of the previous days")  ;

// deleting the productivity from the db
await prodModel.findOneAndDelete({_id: req.params.id})
successStatus(res , StatusCodes.OK  , "prod deleted")
})