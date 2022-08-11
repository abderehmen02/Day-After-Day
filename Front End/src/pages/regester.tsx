import React  , {useState } from 'react'
import { regester } from '../actions/auth'
import { authInfo} from '../types/actions/auth'
export const  Regester: React.FC = ()=> {
  // email : { type : String }   ,
  // image : { type: String , default : 'unknownPerson.png'  }  , 
  // password : { type :String } , 
  // birthDate  : {type : Date  , default  : new Date()} ,
  // fullName: {type : String}  , 
  // verified : {type : Boolean , default : false}
  const [email, setEmail] = useState<String>("") ; 
  const [error, setError] = useState(null)
  const [password, setPassword] = useState<String>("") ; 
  const [birthDate, setBirthDate] = useState<Date>(new Date()) ; 
  const [fullName, setFullName] = useState<String>("")
  const handleSubmit = () : void =>{
  const {error, data} = await regester({email , password ,birthDate , fullName})    ;  
  if(error){
    setError(error)  ;
  } 
  
  }
  return (
    div>this is the regester page</div>
  )
}
