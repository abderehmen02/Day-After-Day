export interface regesterBody {
  email : String , 
  password : String, 
  birthDate  : String ,
  fullName: String ,  
}

export interface authInfo {
    token : String  , 
}

export interface loginBody {
    userName : String , 
    passWord : String , 
}


export interface successRegester {
    success : boolean , 
    data : authInfo ,
    error : undefined 
}
export interface failRegester {
    success  : boolean , 
    error : any , 
    data : undefined
}
export type authResponce = successRegester | failRegester 