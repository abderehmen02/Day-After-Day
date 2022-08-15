export interface userInfoExistState {
  email : string ,
  image : File , 
  birthDate  : string ,
  fullName: string  , 
  verified : boolean 
}

export type userInfoState = userInfoExistState | null  ;
 
export enum userInfoActionTypes {
    USER_INFO_EDIT = "USER_INFO_EDIT"  , 
    USER_INFO_RESET = "USER_INFO_RESET"
}

export interface userInfoEditAction {
   type : userInfoActionTypes.USER_INFO_EDIT  , 
   payload  : userInfoExistState , 
}
export interface userInfoResetAction {
    type :userInfoActionTypes.USER_INFO_RESET , 
}


export type userInfoAction =  userInfoEditAction | userInfoResetAction 