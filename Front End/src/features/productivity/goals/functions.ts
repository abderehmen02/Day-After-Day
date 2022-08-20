import { createAction } from "../../../utils"

export const submitGoals = async (body , token , dispatch  , setErr)=>{
const{data , error} = createAction( '/goal' , body , token)
if(data){console.log(data)}
else console.log(error) 
}