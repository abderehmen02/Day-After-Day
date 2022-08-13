import {authInfo , regesterBody } from '../types/actions/auth'  ;
import { getReq , postReq } from '../utils'  ; 

export const regester  = async (body : regesterBody)  : Promise<any>  =>{
    try{
    const responce  =  await postReq('auth/regester' , body  , null) ;
    const {error , data  }  = await responce.json()
    if(data) { return {data  , error : false}
   localStorage.setItem("day-after-day-auth" , JSON.stringify(data)) 
}
    return { error  , data : false}
    }
    catch(err){
        console.log(err)
    }
}