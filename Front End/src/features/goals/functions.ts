import { goalActionTypes, oneGoalState } from "../../types"
import { createAction, deleteSecureAction, getSecureAction, putSecureAction } from "../../utils"


const path = 'goal'

export const submitGoal= async (token : string | undefined , body :object, emitAction:Function  )=>{
const{data , error} = await createAction( path, body , token)
if(data){ 
    emitAction(goalActionTypes.GOAL_SUCCUSS , data)
}
else {
    emitAction(goalActionTypes.GOAL_ERROR , error)
} 
}


export const getGoals = async (token : string | undefined , emitAction : Function )=>{
    emitAction(goalActionTypes.GOAL_REQUEST )
    const {data , error} = await getSecureAction(path , token )
    if(data){
      emitAction(goalActionTypes.GOAL_SUCCUSS , data) }
    
    else {
        emitAction(goalActionTypes.GOAL_ERROR  , error)
    }
}

export const editGoal = async (id : string ,  token : string | undefined  , body : object, emitAction : Function)=>{
const {data , error } = await putSecureAction(`${path}/${id}` , body , token) ;
emitAction(goalActionTypes.GOAL_REQUEST ) 
if(data){
    emitAction(goalActionTypes.GOAL_SUCCUSS , data )  ; 

}
else emitAction(goalActionTypes.GOAL_ERROR , error)
}

export const deleteGoal = async (id : string , token : string | undefined  , emitAction : Function)=>{
    const {data , error } = await deleteSecureAction(`${path}/${id}` , token) ;
    if(data){
 emitAction(goalActionTypes.GOAL_SUCCUSS , data)
    }
    else if(error){
        console.log(error)
    }
}