const asyncWrapper  = require("../helpers/asyncWrapper") ; 
const eventModel = require('../db/models/events.js')

export const CreateModel = asyncWrapper(async (req , res)=>{
const model = await eventModel.create
})