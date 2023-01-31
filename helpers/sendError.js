const  sendError= (res   , {error , status})=>{
res.status(status).json(error)  ; 
}
const sendErr = (res , status=400 , error)=>{
res.status(status).json({error : error})
throw new Error(error)
}
module.exports = {sendErr , sendError}