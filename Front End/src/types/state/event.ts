import { type } from "os"

export interface oneEvent {
    title : string , 
    descreption  : string , 
    date : string 
}
export interface eventState{
    data? : oneEvent[] ,
    loading : boolean , 
    error? : any
}
export enum eventActions {
   EVENT_REQUEST = 'EVENT_REQUEST' ,
   EVENT_ERROR = 'EVENT_ERROR' ,
   EVENT_SUCCUSS = 'EVENT_SUCCUSS' ,
   EVENT_RESET = 'EVENT_RESET'
}


export interface eventSuccussAction {
    type : eventActions.EVENT_SUCCUSS ,
    payload : oneEvent[] ,
}


export interface eventErrorAction {
    type :  eventActions.EVENT_ERROR ,
    payload : any 
}

export interface eventRequestAction {
    type : eventActions.EVENT_REQUEST ,
}
export interface eventResetAction {
    type : eventActions.EVENT_RESET
}


export type eventAction = eventErrorAction | eventRequestAction | eventResetAction | eventSuccussAction