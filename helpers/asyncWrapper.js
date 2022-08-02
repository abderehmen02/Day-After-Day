const asyncWrapperFun =   (fun)=>{
    return async (req , res , next)=>{
        try{
            await fun(req , res , next) ; 
        }
        catch(error) {
     
    console.log("there is an error")
    console.log(error)
        
    }
}
}
module.exports = asyncWrapperFun