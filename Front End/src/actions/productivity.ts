import { getReq } from "../utils"


export const getProductivities = async(token : string | undefined) : Promise<{data?: any , error?: any}> =>{
const responceData = await getReq("/prod" , token)
if(responceData.success === true){
    console.log("responce data") ; 
    console.log(responceData)
    return {data : responceData.data}
}
console.log("not succuss")
console.log(responceData)
return {error : responceData.error}
}