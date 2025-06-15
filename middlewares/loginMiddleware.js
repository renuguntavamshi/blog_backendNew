const jwt=require('jsonwebtoken');
let loginMiddleware=(req,res,next)=>{
let token=req.header("x-token");
if(!token){
    res.send("No token found")
}
next();
    
}
module.exports=loginMiddleware;