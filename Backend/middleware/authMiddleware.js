const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// const verifyToken = (req , res ,next)=>{
// const token = req.headers.token 
// if(!token){
// return res.json("Token not Provided")
// }

// if(token !== "12345"){
//     return res.json("Invalid Token")
// }
// next()
// }

const verifyToken =(req,res,next)=>{
try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if(!authHeader){
        return res.json("Un-Authorized")
    }
    const token = authHeader.split(" ")[1]
    if(!token){
        return res.json("No Token Provided")
    }
    const payload = jwt.verify(token ,process.env.JWT_SECRET)
    req.user = payload
    next()
} catch (error) {
    res.json(error)
}
}

module.exports = {verifyToken}