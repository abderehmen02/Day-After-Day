export interface oneGoalState {
      _id : string , 
      title: string ,  
  completed: boolean ,
deadLine: Date ,
descreption: string ,
progress: number
}


export interface goalState {
    data : {
        current : oneGoalState | null, 
        allGoals : oneGoalState[] 
    }
    loading : boolean , 
    error : any
}


export enum goalActionTypes{
    GOAL_REQUEST = 'GOAL_REQUEST' ,
    GOAL_SUCCUSS = 'GOAL_SUCCUSS' ,
    GOAL_ERROR = 'GOAL_ERROR'    ,
    GOAL_RESET = 'GOAL_RESET'
}

export interface goalSuccussAction {
    type : goalActionTypes.GOAL_SUCCUSS  , 
    payload  : oneGoalState[]
}

export  interface goalErrorAction {
    type : goalActionTypes.GOAL_ERROR ,
    payload : any
}

export interface goalRequestAction {
    type : goalActionTypes.GOAL_REQUEST ,
}
interface goalResetAction {
    type : goalActionTypes.GOAL_RESET
}


export type goalActionType = goalErrorAction | goalRequestAction | goalResetAction | goalSuccussAction