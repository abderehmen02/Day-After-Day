import axios from 'axios'
import 'dotenv' 
export const getReq = async  (url : RequestInfo  , token : String )=>{
    if(token){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bareer  ${token}`
        }
     const responce = await   fetch(url  , undefined)
     return responce ; 
    }
    const responce = await fetch(url)
    return responce
}

export const postReq = async (path : string  ,  body  = {} ,  token : String  | null )=>{
    try{
    const url : string =  process.env.React_App_BackEndServer + path   ; 
    console.log('url')
    console.log(url) 
    if(token){
        const responce = await fetch(url , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' 
    }  ,
    body: JSON.stringify(body)
})
        return responce
    }
     console.log("sending responce")
    const responce  = await  fetch(url , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }  ,
    body: JSON.stringify(body)
})
    //  await axios.post(url , body) ; 
    console.log("responce")
    console.log(responce)
    return responce}
    catch(err){
        console.log(err)
    }
}