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
    value : joi.number().required().min(0).max(100).required()           ,
    date : joi.date().max('now')
    })
return prodValidator.validate(body)
}



const validateGoal = (body)=>{
const goalValidator = joi.object({
titel: joi.string() , 
completed: joi.boolean() ,
deadLine: joi.date().min('now') ,
descreption: joi.string() ,
progress: joi.number()    })
return goalValidator.validate(body)
}

const validateDailing =  (body)=>{
const dailingValidator = joi.object({
    desc : joi.string() ,
    rate : joi.number().min(0).max(5) ,
    importantEvents: joi.array() ,
    date : joi.date().max("now") 
})
return dailingValidator.validate(body)
}

module.exports = {validateIdea  , validateProd , validateGoal , validateDailing}