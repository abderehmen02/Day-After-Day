import {authInfo , regesterBody } from '../types/actions/auth'
import { getReq , postReq } from '../utils'
import errorHandler from '../utils'
export const regester  = async (body : regesterBody): authInfo  =>{
    try{
    const responce : Promise<{ error : any | data : authInfo}> =  await postReq('/regester' , body)
    const {error  : any , data  : authInfo } : = await responce.json()
    localStorage.setItem("day-after-day-auth" , JSON.stringify(authData))
    data && return {data}
    return { error}
    }
    catch(err){
        console.log(err)
    }
}
