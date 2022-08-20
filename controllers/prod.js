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
const date = req.body.date || new Date().toISOString()

// createing a unique day from the date inorder to store it uniquely in the database so we don't get a dublicate days
const day = date.slice( 0 , 10) 

// deleting the date inorder not to store it in the database
const newProd = await prodModel.create({user : req.user._id , day ,  ...prodObj})  ;
if(!newProd) sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create the productivity')
const allProds = await prodModel.find({user : req.user._id})
if(!allProds) {sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not get all the productivities")}
successStatus(res , StatusCodes.CREATED  , allProds )
})



// deleting the prods ***
const deleteProd = asyncWrapper(async(req , res)=>{
console.log(req.user)
const prodsp = await prodModel.findOne({user: req.user._id  , _id : req.params.id})
console.log(prodsp)
if(!req.params.id) sendErr(res , StatusCodes.BAD_REQUEST , "you didn't provide an id for the productivity")  ; 
const date = new Date().toISOString()
const day = date.slice( 0 , 10) 

const prodObj = await prodModel.findOne({_id : req.params.id  , user : req.user._id})
// the user can only delete the productivity of the current day
// if(prodObj.day !== day) sendErr(res , StatusCodes.FORBIDDEN , "you can not delete the productivity of the previous days")  ;

// deleting the productivity from the db
await prodModel.findOneAndDelete({_id: req.params.id , user: req.user._id })
const prods = await prodModel.find({user : req.user._id})
if(!prods) sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not get the prods from the database")
successStatus(res , StatusCodes.OK  , prods)
})


// updating the prods***
const updateProd = asyncWrapper(async (req , res)=>{
// the user can only update the productivity of the last day ; so by default we are going to update the productivity of the last day
if(!req.body.value) sendErr(res , StatusCodes.BAD_REQUEST  , "you have to provide a value to update the productivity")
if(!req.params.id) sendErr(res , StatusCodes.BAD_REQUEST , 'you should provide the value of the productivity')
const currDay = new Date().toISOString().slice( 0 , 10)
const curProd = await prodModel.findOne({user : req.user._id  , _id : req.params.id})
if(!curProd) sendErr(res , StatusCodes.NOT_FOUND , 'can not found the current productivity')
// the user have the right only to update the productivity of the present day
if(curProd.day !== currDay ) sendErr(res , StatusCodes.FORBIDDEN , 'you can not update the productivity of the past')
const newProd = await prodModel.findOneAndUpdate({_id :  curProd._id } , {value : req.body.value} , {new : true})
const prods = await prodModel.find({user : req.user._id})
if(!prods) sendErr(res ,StatusCodes.INTERNAL_SERVER_ERROR , 'can not get errors from the server')
successStatus(res , StatusCodes.OK , prods )
})

// getting all the prods ***
const getProds = asyncWrapper(async (req , res)=>{
    const prods = await prodModel.find({user : req.user._id })
    if(!prods) sendErr( res  , StatusCodes.BAD_REQUEST   ," can not get prods from the database of this user ") ;
    successStatus( res ,  StatusCodes.OK  , prods )
})



module.exports = {getProds , deleteProd , updateProd , creatProd }