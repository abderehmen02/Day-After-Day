export interface oneProductivityState {
    day : string , 
    value : number 
}

export interface productivityState {
    data? : {   current : oneProductivityState ,
                allProductivities : oneProductivityState[] } | null ,
    loading? : boolean, 
    error? : any 
}

export enum productivityActionTypes {
    PRODUCTIVITY_REQUEST = "PRODUCTIVITY_REQUEST" ,
    PRODUCTIVITY_ERROR = "PRODUCTIVITY_ERROR",
    PRODUCTIVITY_SUCCUSS = "PRODUCTIVITY_SUCCUSS",
    PRODUCTIVITY_RESET = "PRODUCTIVITY_RESET"
}

export interface productivityRequestAction {
    type: productivityActionTypes.PRODUCTIVITY_REQUEST
}

export interface productivitySuccussAction {
    type  : productivityActionTypes.PRODUCTIVITY_SUCCUSS ,
    payload : oneProductivityState[]
}

export interface productivityErrorAction {
    type : productivityActionTypes.PRODUCTIVITY_ERROR , 
    payload : any
}

export interface productivityResetAction {
    type : productivityActionTypes.PRODUCTIVITY_RESET
}

export type productivityAction = productivityErrorAction | productivityRequestAction | productivityResetAction | productivitySuccussAction