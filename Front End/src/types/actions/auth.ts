export interface regesterBody {
  email : String , 
  password : String, 
  birthDate  : String ,
  fullName: String ,  
}

export interface authInfo {
    token : String  , 
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



export interface loginBody {
    email : string | undefined  ,
    password : string | undefined 
}
export type authResponce = successRegester | failRegester 