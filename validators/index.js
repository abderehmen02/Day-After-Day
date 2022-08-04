const joi = require("joi")



// validating the idea of the user
const validateIdea  = (body)=>{
const newIdeaVlidator = joi.object({
    text : joi.string().min(1).required()  ,
    title: joi.string().min(1)  
})
return newIdeaVlidator.validate(body)
}

// validating the prodactivity of the user
const validateProd = (body)=>{
    const prodValidator = joi.object({
// the user can only be productive for about 0 to 24 hours per day
    value : joi.number().required().min(0).max(24).required()           ,
    date : joi.date().max('now').required() 
    })
return prodValidator.validate(body)
}



module.exports = {validateIdea  , validateProd}