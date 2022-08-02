const  sendErr = (res   , {error , status})=>{
res.status(status).json(error)  ; 
}
const sendError = (res , error , status=400)=>{
res.status(status).json({error : error})
console.log(res)
console.log("res")
throw new Error(error)
}
module.exports = {sendErr , sendError}