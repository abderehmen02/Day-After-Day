import { getReq, postReq } from "./axios"


export const createAction =  async ( path ,  body, token)=>{
try{
const responceData = await postReq( path ,  body , token) ;
if(responceData.type === 'succuss'){
    return {data : responceData.data}
} 
else return {error : responceData.error }
}
catch(error){
    console.log(error)
return {error }
}
}


export const getSecureAction = async ( path ,  body , token)=>{
    try{
        const responceData = await getReq( path , body , token)
        if(responceData.type === "succuss"){
            return {data : responceData.data}
        }
        else return {   error : responceData.error }
    }
}

export const getPublicAction = async (path , body )=>{
    try{
        const responceData = await getReq(path , body) ;
        if(responceData.type === "succuss"){
            return {data : responceData.data}
        }
        else return {error : responceData.error} 
    }
        catch(error){
            return {error}
        }
    
}