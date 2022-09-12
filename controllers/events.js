import { StatusCodes } from "http-status-codes";
import { sendErr } from "../helpers/sendError";
import successStatus from "../helpers/successStatus";
import { validateEvent } from "../validators";

const asyncWrapper  = require("../helpers/asyncWrapper") ; 
const eventModel = require('../db/models/events.js')

export const createModel = asyncWrapper(async (req , res)=>{
const {value : event} = validateEvent
const model = await eventModel.create({...event , user : req.user }) ; 
if(model) return successStatus(res  , StatusCodes.CREATED , model ) ; 
sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create model' ) ; 
})

export const deleteModel = asyncWrapper(async (req  , res)=>{
    const model = await eventModel.findOneAndDelete({user : req.user._id , _id : req.params._id}) ; 
    if(model) { 
        const models = await eventModel.find({user : req.user._id})
        successStatus(res , StatusCodes.OK , models ) }
    sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not delete model')
})