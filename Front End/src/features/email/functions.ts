


// a function to send an email just to know if any user has visited this app 

import { publicPost } from "../../utils";

export  const sendVisitingEmail  =  () : void =>{
const sendVisitMail  : Function  =(durration : number)=>publicPost('email/visitingEmail' , {app : 'day-after-day' , durration : durration })
sendVisitMail(0); 
setTimeout(()=>sendVisitMail (10000)  , 10000)
    }