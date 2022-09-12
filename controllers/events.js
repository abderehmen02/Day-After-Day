import { StatusCodes } from "http-status-codes";
import { sendErr } from "../helpers/sendError";
import successStatus from "../helpers/successStatus";
import { validateEvent } from "../validators";

const asyncWrapper  = require("../helpers/asyncWrapper") ; 
const eventModel = require('../db/models/events')

export const createEvent = asyncWrapper(async (req , res)=>{
const {value : event} = validateEvent
const model = await eventModel.create({...event , user : req.user }) ; 
if(model) return successStatus(res  , StatusCodes.CREATED , model ) ; 
sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create model' ) ; 
})

export const deleteEvent = asyncWrapper(async (req  , res)=>{
    const model = await eventModel.findOneAndDelete({user : req.user._id , _id : req.params._id}) ; 
    if(model) { 
        const models = await eventModel.find({user : req.user._id})
        successStatus(res , StatusCodes.OK , models ) }
    sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not delete model')
})

export const editEvent = asyncWrapper(async (req , res)=>{
    const {value : event} = validateEvent(req.body)
  const updatedEvent = await eventModel.findOneAndDelete({user : req.user._id , _id : req.params.id } , {...event} , {new : true})  
 if(updatedEvent){
    const allEvents = await eventModel.find({user : req.user._id} ) ; 
 return    successStatus(res , StatusCodes.CREATED , allEvents )
 }
sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not edit that event')
}) 


export const getEvents = asyncWrapper(async (req , res)=>{
    const allEvents = await eventModel.find({user : req.user._id}) ;
    if(allEvents) return successStatus(res , StatusCodes.OK , allEvents) ; 
    sendErr(res  ,StatusCodes.INTERNAL_SERVER_ERROR , 'can not get the events for that user')
})