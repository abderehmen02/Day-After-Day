
require("dotenv").config()

module.exports = {
    PORT :  process.env.PORT || 2000,

    URL : process.env.URL ,
    MONGO_DB_CONNECT  :process.env.MONGO_DB_CONNECT  , 
    WEB_TOKEN_SECRET : process.env.WEB_TOKEN_SECRET   ,
    EMAIL_TOKEN_SECRET : process.env.EMAIL_TOKEN_SECRET  ,
    EMAIL : process.env.EMAIL , 
    EMAIL_PASSWORD : process.env.EMAIL_PASSWORD ,
    EMAIL_SENDER : process.env.EMAIL_SENDER ,
    EMAIL_RECEIVER : process.env.EMAIL_RECEIVER ,
    EMAIL_SENDER_PASSWORD : process.env.EMAIL_SENDER_PASSWORD
}