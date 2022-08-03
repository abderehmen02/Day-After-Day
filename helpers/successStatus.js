const successStatus = (res , status = 200  , data)=>{
    res.status(status).json({succuss : true  , data  : data})
}
module.exports = successStatus 