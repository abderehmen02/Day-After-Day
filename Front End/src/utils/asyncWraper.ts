export default  (fn :Function )=>{
    return async(...args : any )=>{
        try{
            await fn(...args)
        }
        catch(err){
            console.log(err)
        }
    }
}