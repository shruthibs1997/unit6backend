const jwt = require("jsonwebtoken");

require("dotenv").config();

const verifyToken=(token)=>{
    return  new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,user){
            if(err) return reject(err);
            return resolve(user)
        })
    })
}


const authenticate = async(req,res,next)=>{
    let bearerToken = req?.headers?.authorization

    if(!bearerToken){
        return res.status(401).json({status:'error',message:"you did not send the authorization header"})
    }
    if(!bearerToken.startsWith("Bearer ")){
        return res.status(401).json({status:'error',message:"you did not send the authorization header"})
    }
    const token = bearerToken.split(' ')[1];

    try{
        const user = await verifyToken(token);
        
        if(user.user.role==="lecture"|| user.user.role==="admin"){
            return next()
        }
        

    }catch(err){
        return res.status(401).json({status:'error',message:"you did not send the correct token"})
    }
}

module.exports= authenticate;