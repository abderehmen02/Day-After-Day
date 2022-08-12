import {authInfo , regesterBody } from '../types/actions/auth'
import { getReq , postReq } from '../utils'

export const regester  = async (body : regesterBody)  =>{
    try{
    console.log("regester fun")
    const responce  =  await postReq('auth/regester' , body  , null) ;
    const {error , data  }  = await responce.json()
    localStorage.setItem("day-after-day-auth" , JSON.stringify(authData))
    if(data) { return {data} }
    return { error}
    }
    catch(err){
        console.log(err)
    }
}
