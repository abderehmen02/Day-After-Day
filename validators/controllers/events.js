const { StatusCodes } = require( "http-status-codes");
const { sendErr } = require("../helpers/sendError");
const successStatus = require("../helpers/successStatus");
const { validateEvent } = require("../validators");

const asyncWrapper  = require("../helpers/asyncWrapper") ; 
const eventModel = require('../db/models/events')  ;

const createEvent = asyncWrapper(async (req , res)=>{
console.log("creave event ")  ;
const {value : event} = validateEvent(req.body) ;  
const model = await eventModel.create({...event , user : req.user._id }) ; 
if(model){ 
    const models = await eventModel.find({user : req.user._id}) ;
    return successStatus(res  , StatusCodes.CREATED , models ) }; 
sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create model' ) ; 
})

 const deleteEvent = asyncWrapper(async (req  , res)=>{
    const model = await eventModel.findOneAndDelete({user : req.user._id , _id : req.params.id}) ; 
    if(model) { 
        const models = await eventModel.find({user : req.user._id})
        successStatus(res , StatusCodes.OK , models ) }
    sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not delete model')
})

 const editEvent = asyncWrapper(async (req , res)=>{
    const {value : event} = validateEvent(req.body)
  const updatedEvent = await eventModel.findOneAndUpdate({user : req.user._id , _id : req.params.id } , event , {new : true})  
 if(updatedEvent){
    const allEvents = await eventModel.find({user : req.user._id} ) ; 
 return    successStatus(res , StatusCodes.CREATED , allEvents )
 }
sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not edit that event')
}) 


 const getEvents = asyncWrapper(async (req , res)=>{
    const allEvents = await eventModel.find({user : req.user._id}) ;
    if(allEvents) return successStatus(res , StatusCodes.OK , allEvents) ; 
    sendErr(res  ,StatusCodes.INTERNAL_SERVER_ERROR , 'can not get the events for that user')
})

module.exports = {createEvent , deleteEvent , getEvents , editEvent}