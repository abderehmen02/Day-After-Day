import { getReq, postReq , deleteReq, putReq } from "./axios"


export const createAction =  async ( path : string ,  body : object , token : string | undefined ) : Promise<{data? : object , error? : any}>=>{
try{
const responceData = await postReq( path ,  body , token) ;
if(responceData.succuss){

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


export const publicPost = async (path : string , body : object) : Promise<{error? : any , data? : any}>=>{
    try {
const {data , error} = await postReq(path , body , null)
if(data.succuss){
    return {data}
}
else return {error}
    }
    catch(error){
        return {error}
    }
}

export const getSecureAction = async ( path : string , token : string | undefined)=>{
    try{
        const responceData = await getReq( path , token)

        if(responceData.succuss){
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

export const deleteSecureAction = async (path : string  , token : string | undefined) =>{
    try{
const responceData = await deleteReq(path , token) ; 
if(responceData.succuss){
    console.log("responce data")
console.log(responceData)
    return {data :responceData.data}
}

else {
    console.log("responce data from delete sercure not succuss")
    console.log(responceData)
     return {error : responceData.error}
 } }
    catch(error ){
        return {error :error}
    }
}
export const putSecureAction = async( path : string , body : object , token : string | undefined  ) : Promise<{data?: any , error?: any }>=>{
    try {
const  responceData = await putReq(path , body , token)
if(responceData.succuss){
    return {data : responceData.data}
}
else return {error : responceData.error}
    }
    catch(error){
        return {error }
    }
}