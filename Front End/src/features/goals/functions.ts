import { goalActionTypes, oneGoalState } from "../../types"
import { createAction, getSecureAction, putSecureAction } from "../../utils"


const path = 'goal'

export const submitGoal= async (token : string | undefined , body :object, emitAction:Function  )=>{
const{data , error} = await createAction( path, body , token)
if(data){ 
    console.log("data from submit goal")
    console.log(data)
    emitAction(goalActionTypes.GOAL_SUCCUSS , data)
}
else {
    emitAction(goalActionTypes.GOAL_ERROR , error)
} 
}


export const getGoals = async (token : string | undefined , emitAction : Function )=>{
    emitAction(goalActionTypes.GOAL_REQUEST )
    console.log("getting goals")
    const {data , error} = await getSecureAction(path , token )
    if(data){
        console.log("data from get goals ")
        console.log(data)
        emitAction(goalActionTypes.GOAL_SUCCUSS , data)
    }
    else {
        emitAction(goalActionTypes.GOAL_ERROR  , error)
    }
}

export const editGoal = async (id : string ,  token : string | undefined  , body : object, emitAction : Function)=>{
const {data , error } = await putSecureAction(`${path}/${id}` , body , token) ;
emitAction(goalActionTypes.GOAL_REQUEST ) 
if(data){
    console.log("data from edit goal")
    console.log(data)
    emitAction(goalActionTypes.GOAL_SUCCUSS , data )  ; 

}
else emitAction(goalActionTypes.GOAL_ERROR , error)
}
