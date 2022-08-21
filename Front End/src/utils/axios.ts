import axios from 'axios'
import 'dotenv' 
import {BACKEND_SERVER} from '../config/default'

export const getReq = async  (path : string  , token?: String )=>{
    const url = BACKEND_SERVER + path
    console.log(url)
    console.log("getreq")
    console.log(token)
    if(token){
        const pararms = {
             method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bareer  ${token}`
                }, }
     const responce = await   fetch(url , pararms ) ; 
     const responceData = await responce.json() ; 
     return responceData  
    }
    const responce = await fetch(url)
    const responceData = await responce.json()  ;
    return responceData
}


export const postReq = async (path : string  ,  body  = {} ,  token? : String  | null )  =>{
    const url : string =  process.env.React_App_BackEndServer + path   ; 
    console.log('url')   ; 
    console.log(url) ; 
    if(token){
        console.log(token)
        console.log("body")
        console.log(body)
        const responce = await fetch(url , {
    method: 'POST', 
    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bareer  ${token}`
    },
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


export const deleteReq = async (path : string , token : string | undefined)=>{
    const url : string =  process.env.React_App_BackEndServer + path  ; 
    if(token){
        const responce = await fetch(url , {
            method : 'DELETE'   , 
            headers: {
                    'Authorization': `bareer  ${token}`
    }
        })
        const responceData = await responce.json()
        console.log("res data")
        console.log(responceData)
        return responceData; 
    }
}

export const putReq  = async (path : string , body :  object , token : string | undefined )=>{
 const url : string = process.env.React_App8BackEndServer + path  ;
 if(token){
    const responce = await fetch(url , {
       method : 'PUT'  ,
       headers : {
          'Content-Type': 'application/json',
           'Authorization': `bareer  ${token}`
       } ,
       body  : JSON.stringify(body)
    })
    const responceData  = await responce.json() ; 
    return  responceData
 } 

}