const goalModel = require("../db/models/goal")
const asyncWrapper = require("../helpers/asyncWrapper")
const {validateGoal} = require('../validators/index')
const {sendErr, sendError} = require("../helpers/sendError") ; 
const successResponce = require("../helpers/successStatus")
const {StatusCodes} = require("http-status-codes")
const createGoals = asyncWrapper(async (req , res)=>{
    // in a goal , the title is required and should be between 2 and  30 characters
    if(!req.body.title) sendErr(res , StatusCodes.BAD_REQUEST , "title is missing")  ; 
    if(req.body.title.length < 2) sendErr(res , StatusCodes.BAD_REQUEST , "title is too short")
    if(req.body.title.length > 30) sendError(res, StatusCodes.BAD_REQUEST , "title is too long")
    const {value : goal } = validateGoal(req.body) ;
    const goalObj = await goalModel.create({ ...goal , user : req.user._id })  ;    
    if(!goalObj) sendErr(res, StatusCodes.INTERNAL_SERVER_ERROR , "can not create the goal in the database")   ;
    successResponce(res, StatusCodes.CREATED , goalObj )
})

const deleteGoal = asyncWrapper(async (req, res)=>{
    if(!req.params.id)sendErr(res, StatusCodes.BAD_REQUEST , 'the goal id is missing') ; 
    await goalModel.findOneAndDelete({_id: req.params.id , user : req.user._id})
    successResponce(res , StatusCodes.OK  , "goal deleted")
})
const updateGoal = asyncWrapper(  async (req , res)=>{
    if(!req.params.id ) sendErr(res , StatusCodes.BAD_REQUEST , "the goal id is missing")  ; 
    const newGoal  = await goalModel.findOneAndUpdate({ _id : req.params.id , user : req.user._id } , { ...req.body } , {new  : true} )
    if(!newGoal) sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , "can not update the goal in our database") ; 
    successResponce(res  , StatusCodes.OK  , newGoal )
})

const getGoals = asyncWrapper(async (req , res)=>{
    console.log("getting request")
    console.log(req.body)
    const goals = await goalModel.find({user : req.user._id})
    if(!goals ) sendErr(res , StatusCodes.BAD_REQUEST , "can not get the goals of the user")
    console.log(goals)
    successResponce(res , StatusCodes.OK , goals)
})

module.exports  = {getGoals  , deleteGoal , createGoals , updateGoal}