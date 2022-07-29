const asyncWrapperFun = (fun)=>{
    return (req , res , next)=>{
        try{
            await fun(req , res , next) ; 
        }
        catch(error){
if(err) res.status(400).json({error})
        }
    }
}
module.exports = asyncWrapperFun