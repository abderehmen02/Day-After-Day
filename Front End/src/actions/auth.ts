import {authInfo , regesterBody } from '../types/actions/auth'  ;
import { getReq , postReq } from '../utils'  ; 
import {useDispatch} from 'react-redux'
import { authResponce , successRegester , failRegester } from '../types/actions/auth';
import asyncWraper from '../utils/asyncWraper';
import { UserInfo } from 'os';
export const regester  = async (body : regesterBody) :Promise<any>  =>{
    try{
     const responceData = await postReq( 'auth/regester'  , body , null)
if(responceData.succuss === true){
    localStorage.setItem("day-after-day" , responceData.data.token ) ;
    return {data: responceData.data , error : false }

}
else return {data : false , error : responceData.error}
    }
    catch(err){
        console.log(err)
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