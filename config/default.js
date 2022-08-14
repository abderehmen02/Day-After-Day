
module.exports = {
    PORT :  process.env.PORT || 2000,
    URL : process.env.URL ,
    MONGO_DB_CONNECT  : 'mongodb+srv://abderehmen02:abdo2015abdo2015@cluster0.xi3z5.mongodb.net/?retryWrites=true&w=majority'  , 
    WEB_TOKEN_SECRET : 'b6f35752ebef1e6684cb418520c656afaab438ffa08476c7c492d3030c5d792637c2616042c5a2da162dca1e613baafedc0c06399e1dd735e038c1874dffcba2'   ,
    EMAIL_TOKEN_SECRET : process.env.EMAIL_TOKEN_SECRET  ,
    EMAIL : process.env.EMAIL , 
    EMAIL_PASSWORD : process.env.EMAIL_PASSWORD
}