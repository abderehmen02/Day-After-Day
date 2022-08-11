export interface userLoginState{
    loading? : Boolean , 
    error? : any , 
    token? : String , 
}

export enum userLoginTypes{
    userLoginRequest  = 'USER_LOGIN_REQUEST' , 
    userLoginSuccuss = 'USER_LOGIIN_SUCCESS'    ,
    userLoginFail = 'USER_LOGIN_ERROR' ,
    userLoginReset = 'USER_LOGIN_RESET'
}

export interface loginRequestAction{
    type: userLoginTypes.userLoginRequest
}

export interface loginSuccssAction{
    type  : userLoginTypes.userLoginSuccuss , 
    token : String , 
}

export interface loginFailAction {
    type : userLoginTypes.userLoginFail ,
    error : any
}
export interface loginResetAction{
    type : userLoginTypes.userLoginReset  , 
}

export type userLoginAction = loginFailAction | loginRequestAction | loginSuccssAction | loginResetAction