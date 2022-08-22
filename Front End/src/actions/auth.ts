import {authInfo , regesterBody } from '../types/actions/auth'  ;
import { getReq , postReq } from '../utils'  ; 
import {useDispatch} from 'react-redux'
import { authResponce , successRegester , failRegester } from '../types/actions/auth';
import asyncWraper from '../utils/asyncWraper';
import { UserInfo } from 'os';
export const regester  = async (body : regesterBody) :Promise<any>  =>{
    try{
     console.log("regester") ; 
     const responceData = await postReq( 'auth/regester'  , body , null)
     console.log(responceData)
     console.log("responce data from regester")
if(responceData.succuss === true){
    localStorage.setItem("day-after-day" , responceData.data.token ) ;
    return {data: responceData.data , error : false }

}
else return {data : false , error : responceData.error}
    }
    catch(err){
        console.log("there is an error")
        console.log(err)
    }
}

export const userInfoAuth =   async(token : string) : Promise<any> =>{
    try{
    const responceData = await getReq(`auth/${token}`)
    console.log("responce data")
    console.log(responceData.data._doc)
    return {data : responceData.data._doc}
    }
    catch(err){
        console.log(err)
    }
} 