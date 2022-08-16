import { productivityState , productivityActionTypes , productivityAction } from "../../types";

const productivityInitialState = {
    error : null ,
    loading : false  , 
    data : null
}

export const productivityReducer = (state : productivityState = productivityInitialState  , action : productivityAction )=>{
switch(action.type){
 case productivityActionTypes.PRODUCTIVITY_REQUEST : {
    return {
        loading  : true ,
    }
 }
 case productivityActionTypes.PRODUCTIVITY_ERROR : {
    return {
        error : action.payload , 
        loading  : false , 
        data : null , 
    }
 }
 case productivityActionTypes.PRODUCTIVITY_SUCCUSS :{
    return {
        error : null ,
        loading : false ,
        data : action.payload
    }
 }
 case productivityActionTypes.PRODUCTIVITY_RESET : {
    return productivityInitialState 
 }
 default : {return state}
}
}