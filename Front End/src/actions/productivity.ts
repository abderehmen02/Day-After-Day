import { getReq } from "../utils"


export const getProductivities = async(token)=>{
const responceData = await getReq("/prod" , token)
if(responceData.success === true){
    console.log("responce data") ; 
    console.log(responceData)
}
console.log("not succuss")
console.log(responceData)
}