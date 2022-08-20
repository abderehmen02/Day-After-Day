import { goalState  , goalActionType, goalActionTypes} from "../../types"



const goalInitialState : goalState = {
    error : null , 
    loading  : false , 
    data : {
        current :   { titel:  '' , 
completed: false  ,
deadLine: new Date(),
descreption: '',
progress: 0    } ,
allGoals : [ { titel:  '' , 
completed: false  ,
deadLine: new Date(),
descreption: '',
progress: 0    } ]
    }
}

const goalReducer = (state:goalState = initialState , action : goalActionType)=>{
    switch(action.type){
        case(goalActionTypes.GOAL_SUCCUSS) : {
if(!action.payload.length){
    return goalInitialState
}

            return {
            error : null , 
            loading : false  ,
            data : {
                current : action.payload[action.payload.length - 1]

            }
            }
        }
    }
}