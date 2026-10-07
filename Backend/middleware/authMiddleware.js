

const verifyToken = (req , res ,next)=>{
const token = req.headers.token 
if(!token){
return res.json("Token not Provided")
}

if(token !== "12345"){
    return res.json("Invalid Token")
}
next()
}

module.exports ={verifyToken}