import { getReq } from "../utils"


export const getProductivities = async(token : string | undefined) : Promise<{data?: any , error?: any}> =>{
    try{
const responceData = await getReq("prod" , token)
if(responceData.succuss === true){
    return {data : responceData.data}
}
return {error : responceData.error}  }
catch(err){
    console.log(err)
    return {error : err}
}
}


