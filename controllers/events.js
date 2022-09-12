import { StatusCodes } from "http-status-codes";
import { sendErr } from "../helpers/sendError";
import successStatus from "../helpers/successStatus";

const asyncWrapper  = require("../helpers/asyncWrapper") ; 
const eventModel = require('../db/models/events.js')

export const CreateModel = asyncWrapper(async (req , res)=>{
const {value : event} = valid
const model = await eventModel.create({...event , user : req.user }) ; 
if(model) return successStatus(res  , StatusCodes.CREATED , model ) ; 
sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create model' ) ; 

})