import { eventAction, eventActions, eventState } from "../../types";

const initialEventState : eventState = {
    loading : false
}

export const eventReducer  = (state : eventState  = initialEventState , action : eventAction): eventState=>{
switch (action.type) {
   case eventActions.EVENT_REQUEST:{return {loading : true}}
   case eventActions.EVENT_RESET :{ return initialEventState };
   case eventActions.EVENT_ERROR : {return {loading : false , error : action.payload} }; 
   case eventActions.EVENT_SUCCUSS : {return {loading : false , data : action.payload}}
    default: return state
}
}