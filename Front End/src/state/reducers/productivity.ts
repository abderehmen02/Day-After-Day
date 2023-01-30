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
     error : null , 
     loading : true , 
     data : null
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
    console.log("prod success action")
    if( action.payload.length && action.payload[action.payload.length - 1].day === new Date().toISOString().slice(0 ,10)){
        return {
    data : {   current :  action.payload[action.payload.length - 1],
                allProductivities :  action.payload  },
    loading : false, 
    error : null       
    } }
    console.log("prod succuss actiopn continiue")
    return {
        error : null ,
        loading : false ,
        data : {
            current : { day : new Date().toISOString().slice(0 ,10)  , value :  0 } ,
            allProductivities  : action.payload 
        }
    }
 } 
 case productivityActionTypes.PRODUCTIVITY_RESET : {
    return productivityInitialState 
 }
 default : {return state}

}
}