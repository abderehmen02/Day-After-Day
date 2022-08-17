import { Action, productivityAction, productivityActionTypes } from "../../types";
import { Dispatch}from 'redux'
import { allActionTypes } from "../../types";
export const emitAction  = ( actionType : any , payload? : object  ) : any =>{
    return (dispatch : Dispatch<Action> )=>{
        console.log(dispatch)
        console.log("dispatch function above")
        if(payload){
dispatch({type : actionType , 
        payload : payload
        })
           } 
        
        else dispatch( { type :  actionType } ) 

        }

    }