import axios from 'axios'
import 'dotenv' 
import {BACKEND_SERVER} from '../config/default'

export const getReq = async  (path : string  , token?: String )=>{
    const url = BACKEND_SERVER + path
    if(token){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bareer  ${token}`
        }
     const responce = await   fetch(url)
     return responce ; 
    }
    const responce = await fetch(url)
    const responceData = await responce.json()  ;
    return responceData
}


export const postReq = async (path : string  ,  body  = {} ,  token? : String  | null )  =>{
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
        const responceData = await responce.json()
        return responceData
    }
     console.log("sending responce")
     console.log(url)
     
     console.log(body)
    const responce = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify(body) 
                })
                const responceData = await responce.json()
                console.log(responceData)
     
    return responceData
}