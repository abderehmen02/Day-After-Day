import { navMobileButtonActionType, navMobileButtonStateType , navMobileButtonReverseActionType } from '../../types'

const initialState = false ; 

export const mobileNavButtonState = (state : navMobileButtonStateType  = initialState , action : navMobileButtonActionType ) : navMobileButtonStateType =>{
    switch(action.type ){
        case('Reverse') : {return !state}  ;
        default : return state
    } 
}

