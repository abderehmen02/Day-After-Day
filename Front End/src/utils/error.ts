const errorHandler = (message : any)=>{
console.log(message)
}

const asyncWrraper = (fn:Function)=>{
    try {
        fn()
    }
    catch(err){
        console.log(err)
    }
}