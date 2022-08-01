const ideaModel = require("../db/models/newIdea")
const asyncWrapper = require("../helpers/asyncWrapper")
const createNewIdea =asyncWrapper(  async (req , res)=>{
if(!req.body.text) throw new Error("the idea text is missing") 
console.log(req.user._id)
console.log("user req")
console.log(req.user)
const newUser = await   ideaModel.create({ ...req.body , user : req.user._id })
res.status(201).json(newUser)
} )
module.exports = {createNewIdea}