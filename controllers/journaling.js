import { sendErr } from "../helpers/sendError";

const { StatusCodes } = require("http-status-codes");
const journalingModel = require("../db/models/journaling") ; 
const asyncWraper = require("../helpers/asyncWrapper");
const successStatus = require("../helpers/successStatus");
const {validateJournaling} = require("../validators")


export const createJournaling = asyncWraper( async (req , res)=>{
   const  {value : journaling} = validateJournaling(req.body)  ; 
   const  newJournal = await journalingModel.create({...journaling  , user : req.user._id  }) ;
   if(newJournal){
     const allJournals = await journalingModel.find({user : req.user._id})
    return successStatus(  res  , StatusCodes.CREATED , allJournals )
   }
   sendErr(res  , StatusCodes.INTERNAL_SERVER_ERROR , "can not create the new journal")
})


export const getJournaling = asyncWraper(async (req ,res)=>{
    const allJournals = await journalingModel.find({user : req.user._id}) ; 
    if(allJournals){
    return     successStatus(res , StatusCodes.OK , allJournals)
    }
    sendErr(res , StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE , "can not get the journals")  
})

export const deleteJournal = asyncWraper(async (req , res)=>{
    const deletedJournal = await journalingModel.findOneAndDelete({_id : req.params.id  , user : req.user._id })
    if(deletedJournal){
        const allJournals = await journalingModel.find({ user : req.user.id })   ;
        successStatus(res , StatusCodes.OK , allJournals)
    }
    sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not delete the journal")
})


export const updateJournal = asyncWraper(async (req , res)=>{
    const {value  : journal} = validateJournaling(req.body)  ; 
    const newJournal = await journalingModel.findOneAndUpdate({user : req.user._id , id : req.params.id  } , journal , {new : true})
    if(newJournal){
        const allJournals = await journalingModel.find({user : req.user._id})
        successStatus(res , StatusCodes.OK , allJournals)
    }
    sendErr( res , StatusCodes , "can not update the journal " )
})

