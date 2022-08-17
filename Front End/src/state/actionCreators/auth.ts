
export const login  = (token : string, userObj : userInfoExistState ) : any=>{
    return (dispatch : Dispatch<loginSuccssAction | userInfoAction > )=>{
           dispatch( {  type : userLoginTypes.userLoginSuccuss ,
              token }) ; 
           dispatch({
            type: userInfoActionTypes.USER_INFO_EDIT , 
            payload : userObj 
           })
    }

}