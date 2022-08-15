import {authInfo , regesterBody } from '../types/actions/auth'  ;
import { getReq , postReq } from '../utils'  ; 
import {user} from    '../state/actionCreators'
import { authResponce , successRegester , failRegester } from '../types/actions/auth';
import {useDispatc}
export const regester  = async (body : regesterBody) :Promise<any>  =>{
    console.log("regester before try") ; 
    try{
     console.log("regester") ; 
     const responceData = await postReq( 'auth/regester'  , body , null)
if(responceData.succuss === true){
    console.log("success")
    localStorage.setItem("day-after-day" , responceData.data.token ) ;
    return {data: responceData , error : false }

}
else return {data : false , error : responceData.error}
    }
    catch(err){
        console.log("there is an error")
        console.log(err)
    }
}