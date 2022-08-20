import { oneGoalState } from "../../types"
import { createAction } from "../../utils"

export const submitGoal= async (token : string | undefined , body :object, dispatch :Function , setErr : Function )=>{
    console.log(token)
const{data , error} = await createAction( 'goal' , body , token)
if(data){console.log(data) 
    console.log("data from goal server")
}
else console.log(error) 
}