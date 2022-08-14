import {authInfo , regesterBody } from '../types/actions/auth'  ;
import { getReq , postReq } from '../utils'  ; 
import { authResponce , successRegester , failRegester } from '../types/actions/auth';

export const regester  = async (body : regesterBody) :Promise<any>  =>{
    console.log("regester before try") ; 
    try{
     console.log("regester") ; 
    const responce   =  await postReq('auth/regester' , body  , null) ;
    console.log("responce") ;
    console.log(responce) ;
    const {error , data   } : authResponce   = await responce.json()
    if(data) { 
        console.log("data") ;
        console.log(data)
           localStorage.setItem("day-after-day-auth" , JSON.stringify(data)) 
        return {data  , error : false}  
}
    return { error  , data : false}
    }
    catch(err){
        console.log(err)
    }
}