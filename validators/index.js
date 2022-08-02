const joi = require("joi")

const validateIdea  = (body)=>{
const newIdeaVlidator = joi.object({
    text : joi.string().min(1).required()  ,
    title: joi.string().min(1)  
})
return newIdeaVlidator.validate(body)
}

module.exports = {validateIdea}