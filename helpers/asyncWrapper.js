const asyncWrapperFun =   (fun)=>{
    return async (req , res , next)=>{
        try{
            await fun(req , res , next) ; 
        }
        catch(error){
if(err) { console.log(error)
    res.status(400).json({error})
        }
    }
}
}
module.exports = asyncWrapperFun