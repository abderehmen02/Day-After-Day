import { goalState  , goalActionType, goalActionTypes} from "../../types"



const goalInitialState : goalState = {
    error : null , 
    loading  : false , 

    data : {
current :  null , 
allGoals : []
    }
}

export const goalReducer = (state:goalState = goalInitialState , action : goalActionType)=>{
    switch(action.type){
        case(goalActionTypes.GOAL_SUCCUSS) : {
if(!action.payload.length){
    return goalInitialState
}

            return {
            error : null ,
            loading : false  ,
            data : {
                current :   action.payload[action.payload.length - 1] || null , 
                 allGoals : action.payload 
            }
            }
        }
    case(goalActionTypes.GOAL_REQUEST) : {
        return {
            data : goalInitialState.data, 
            loading : true, 
            error : null
        }
    }
    case (goalActionTypes.GOAL_ERROR) : {
        return  {
            data : goalInitialState.data , 
            loading : false , 
            error : action.payload
        }
    }
    case (goalActionTypes.GOAL_RESET) : {
        return  goalInitialState 
    }
    default : {return state}
    }
}