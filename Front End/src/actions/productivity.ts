import { getReq } from "../utils"


export const getProductivities = async(token : string | undefined) : Promise<{data?: any , error?: any}> =>{
    try{
        console.log("getting productivities")
const responceData = await getReq("prod" , token)
if(responceData.succuss === true){
    console.log("reponce data prod")
    console.log(responceData)
    return {data : responceData.data}
}
console.log("not succuss")
console.log(responceData)
return {error : responceData.error}  }
catch(err){
    console.log(err)
    return {error : err}
}
}


