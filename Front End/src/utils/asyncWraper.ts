export default  (fn :Function )=>{
    return async(...args : any )=>{
        try{
    const returned =         await fn(...args)
    return returned
        }
        catch(err){
            console.log(err)
        }
    }
}