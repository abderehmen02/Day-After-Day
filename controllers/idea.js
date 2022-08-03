const ideaModel = require("../db/models/newIdea")
const asyncWrapper = require("../helpers/asyncWrapper")
const {StatusCodes} = require('http-status-codes')
const {sendError } =  require("../helpers/sendError")
const successStatus = require('../helpers/successStatus')
const {validateIdea} = require('../validators/index')
const { json } = require("express")



// creating new idea 
const createNewIdea =asyncWrapper(  async (req , res)=>{
if(!req.body.text) { sendError(res , StatusCodes.BAD_REQUEST  , 'text does not exist' )  } 
const {value : ideaObj} = validateIdea(req.body)   ; 
const newUser = await   ideaModel.create({ ...ideaObj , user : req.user._id })
res.status(201).json(newUser)
} )

// getting  the ideas of a specific user 

const getIdeas = asyncWrapper(async (req , res)=>{
    const ideas = await ideaModel.find({user: req.user._id})
    if(!ideas) sendError(res , StatusCodes.INTERNAL_SERVER_ERROR  , "we can not find ideas of that user in our database ")
    successStatus(res , StatusCodes.OK  , {ideas}  )
})

// deleting an idea of a particular user 
const deleteIdea = asyncWrapper(async (req ,res)=>{
    await ideaModel.findOneAndDelete({user: req.user._id  , _id :req.params.id })
    successStatus(res , StatusCodes.OK  , "idea deleted")
})

// updating a specific idea of a particular user
const editIdea = asyncWrapper(async (req , res)=>{
    if(!req.body.text) { sendError(res , StatusCodes.BAD_REQUEST  , 'text does not exist' )  }
    const {value :  idea } = validateIdea(req.body)
    const newIdea = await ideaModel.findOneAndUpdate({user : req.user._id  , _id : req.params.id }  , idea , {new : true} )
    successStatus(res , StatusCodes.OK  , newIdea)
}) 
module.exports = {createNewIdea  , editIdea , deleteIdea , getIdeas }