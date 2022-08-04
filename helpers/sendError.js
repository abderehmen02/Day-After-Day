const  sendErr = (res   , {error , status})=>{
res.status(status).json(error)  ; 
}
const sendError = (res , status=400 , error)=>{
console.log("sending error")
console.log(status)
res.status(status).json({error : error})
console.log(res)
console.log("res")
throw new Error(error)
}
module.exports = {sendErr , sendError}