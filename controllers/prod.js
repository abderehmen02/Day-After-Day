const prodModel = require("../db/models/prod")
const asyncWrapper = require('../helpers/asyncWrapper')
const { validateProd } = require("../validators/index")
const {sendErr} = require("../helpers/sendError")
const {StatusCodes} = require("http-status-codes")
const successStatus =  require("../helpers/successStatus")

// creating a productivity ***
const creatProd = asyncWrapper( async (req , res)=>{

if(!req.body.value) sendErr(res , StatusCodes.BAD_REQUEST , "there is no value for this productivity" )
const {value  :  prodObj} = validateProd(req.body  )
const date = req.body.date || new Date()
// creating a unique date string to be able to store it uniquely in our data base so we can avoid dublicate days in our database
const day = date.getDay().toString() + date.getMonth().toString() + date.getFullYear().toString()

// deleting the date inorder not to store it in the database
delete prodObj.date  ;
const newProd = await prodModel.create({user : req.user._id , day ,  ...prodObj})  ;
console.log(newProd)
console.log("prow obj")
if(!newProd) sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create the productivity')

successStatus(res , StatusCodes.CREATED  , newProd )
})



// deleting the prods ***
const deleteProd = asyncWrapper(async(req , res)=>{
// the user can only delete the productivity of the current year
if(!req.params.id) sendErr(res , StatusCodes.BAD_REQUEST , "you didn't provide an id for the productivity")  ; 
const currDay = new Date().getDay().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString() ; 

const prodObj = await prodModel.findById(req.params.id)
  
// the user can only delete the productivity of the current day
if(prodObj.date !== currDay) sendErr(res , StatusCodes.FORBIDDEN , "you can not delete the productivity of the previous days")  ;

// deleting the productivity from the db
await prodModel.findOneAndDelete({_id: req.params.id})
successStatus(res , StatusCodes.OK  , "prod deleted")
})


// updating the prods***
const updateProd = asyncWrapper(async (req , res)=>{
// the user can only update the productivity of the last day ; so by default we are going to update the productivity of the last day
if(!req.body.value) sendErr(res , StatusCodes.BAD_REQUEST  , "you have to provide a value to update the productivity")
const currDay = new Date().getDay().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString() ; 

// updating the productivity
const newProd = await prodModel.findByIdAndUpdate({day : currDay} ,{value  : req.body.value} )

successStatus(res , StatusCodes.OK , newProd )
})

// getting all the prods ***
const getProds = asyncWrapper(async (req , res)=>{
    const prods = await prodModel.find({user : req.user._id })
    if(!prods) sendErr( res  , StatusCodes.BAD_REQUEST   ," can not get prods from the database") ;
    successStatus( res ,  StatusCodes.OK  , prods )
})


module.exports = {getProds , deleteProd , updateProd , creatProd }