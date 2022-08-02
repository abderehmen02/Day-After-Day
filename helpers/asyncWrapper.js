const asyncWrapperFun =   (fun)=>{
    return async (req , res , next)=>{
        try{
            await fun(req , res , next) ; 
        }
        catch({error , status=400}){
if(error) { console.log(error)
    res.status(status).json({error})
        }
    }
}
}
module.exports = asyncWrapperFun