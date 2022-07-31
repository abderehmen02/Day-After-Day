const env = require("dotenv").config()
module.exports = {
    PORT :  process.env.PORT || 2000,
    URL : process.env.URL ,
    MONGO_DB_CONNECT  : process.env.MONGO_DB_CONNECT   , 
    WEB_TOKEN_SECRET : process.env.WEB_TOKEN_SECRET  
}