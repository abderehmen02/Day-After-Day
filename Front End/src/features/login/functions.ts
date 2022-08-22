import { emitAction } from "../../state/actionCreators";
import { loginBody } from "../../types";
import { publicPost } from "../../utils";

const path : string = "login"

export const login = async(body : loginBody , emitAction : Function)=>{
const {data , error }  = await publicPost(path , body )
if(data){
    console.log("data from loginb")
    console.log(data)
}
console.log(error)
}