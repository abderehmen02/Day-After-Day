import { Action, productivityAction, productivityActionTypes } from "../../types";
import { Dispatch}from 'redux'
import { allActionTypes } from "../../types";
export const emitAction  = ( actionType : any , payload? : any  ) : any =>{
    return ( (dispatch : Dispatch<Action> )=>{
 
        if(payload){
dispatch({type : actionType , 
        payload : payload
        })
           } 
        
        else  { dispatch( { type :  actionType } ) } 
        } )
    }