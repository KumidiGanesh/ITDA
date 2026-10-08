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


const verifyToken =async(req,res,next)=>{
const authHeader = req.headers.Authorization || req.headers.authorization

if(!authHeader){
    return res.json("Unauthorized")
}

const token = authHeader.split(" ")[1]

if(!token){
    return res.json("No token Provided")
}

const payload = jwt.verify(token ,process.env.JWT_SECRET)
      req.user = payload
       next()
}

module.exports ={verifyToken}