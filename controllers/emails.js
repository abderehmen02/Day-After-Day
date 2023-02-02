const nodemailer = require("nodemailer")



// send me an email when someone visit Day After Day

const sendVisitingEmail = async (req , res)=>{
    let transporter = nodemailer.createTransport({
        service : 'gmail'  ,
        auth : {
            user : 'rahimoco@gmail.com' ,
            pass : 'yzhzoyzafvqtbcln'
        }
});
 await transporter.sendMail({
    from: 'rahimaco@gmail.com',
    to: 'abderehmen02@gmail.com',
    subject: 'visit portfolio',
    text: 'your portfolio have been visited'
}, (err, info) => {
    if(info){
    console.log("info")
    console.log(info);}
    if(err)    console.log(err)
});
res.send("email sent")
}


module.exports = {sendVisitingEmail}