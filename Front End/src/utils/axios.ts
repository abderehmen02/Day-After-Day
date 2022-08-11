import axios from 'axios'
 
const getReq = async  (url : String , token : String )=>{
    if(token){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bareer  ${token}`
        }
     const responce = await   axios.get(url ,  headers ) ; 
     return responce ; 
    }
    const responce = axios.get(url)  ; 
    return responce
}

const postReq = async (url : String ,  body : String = {} ,  token : String ){
    if(token){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bareer  ${token}`
        }
        const responce = await axios.post(url , body  headers)
        return responce
    }
    const responce = await axios.post(url , body) ; 
    return responce
}