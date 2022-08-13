import axios from 'axios'
import 'dotenv' 
export const getReq = async  (url : any, token : String )=>{
    if(token){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bareer  ${token}`
        }
     const responce = await   fetch(url)
     return responce ; 
    }
    const responce = await fetch(url)
    return responce
}

export const postReq = async (url: any  ,  body : any = {} ,  token : String  | null )=>{
    url = process.env.React_App_BackEndServer + url ; 
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
     
    const responce  = await  fetch(url , {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }  ,
    body: JSON.stringify(body)
})
    //  await axios.post(url , body) ; 
    console.log(responce)
    return responce
}