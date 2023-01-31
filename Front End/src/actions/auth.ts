import {authInfo , regesterBody } from '../types/actions/auth'  ;
import { getReq , postReq } from '../utils'  ; 
import {useDispatch} from 'react-redux'
import { authResponce , successRegester , failRegester } from '../types/actions/auth';
import asyncWraper from '../utils/asyncWraper';
import { UserInfo } from 'os';
export const regester  = async (body : regesterBody) :Promise<any>  =>{
    try{
     const responceData = await postReq( 'auth/regester'  , body , null)
     console.log("responceData")
     console.log(responceData)
if(responceData && responceData.succuss === true){
    localStorage.setItem("day-after-day" , responceData.data.token ) ;
    return {data: responceData.data , error : false }

}
else return {data : false , error : responceData.error}
    }
    catch(err){
        console.log("error")
        console.log(err)
        return ({data : false , error : false})
    }
}

export const userInfoAuth =   async(token : string) : Promise<any> =>{
    try{
    console.log("sending the data")
    const responceData = await getReq(`auth/${token}`)
    console.log(responceData)
    return {data : responceData.data._doc}
    }
    catch(err){
        console.log("error ")
        console.log(err)
    }
} 