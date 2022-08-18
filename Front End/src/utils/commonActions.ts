import { getReq, postReq , deleteReq } from "./axios"


export const createAction =  async ( path : string ,  body : object , token : string | undefined ) : Promise<{data? : object , error? : any}>=>{
try{
const responceData = await postReq( path ,  body , token) ;
if(responceData.type === 'succuss'){
    return {data : responceData.data}
} 
 
else { console.log("responce data from create action") ;
console.log(responceData);   return {error : responceData.error } }
}
catch(error){
    console.log(error)
return {error }
}
}


export const getSecureAction = async ( path : string ,  body : object, token : string | undefined)=>{
    try{
        const responceData = await getReq( path , token)
        if(responceData.type === "succuss"){
            return {data : responceData.data}
        }
        else return {   error : responceData.error }
    }
    catch(error){
        return {error}
    }
}

export const getPublicAction = async (path : string , body : object )=>{
    try{
        const responceData = await getReq(path ) ;
        if(responceData.type === "succuss"){
            return {data : responceData.data}
        }
        else return {error : responceData.error} 
    }
        catch(error){
            return {error}
        }
    
}

export const deleteSecureAction = async (path : string  , token) =>{
    try{
const responceData = await deleteReq(path , token) ; 
if(responceData.type === "succuss"){
    return {data :responceData.data}
}
else return {error : responceData.error}
    }
    catch(error ){
        return {error :error}
    }
}