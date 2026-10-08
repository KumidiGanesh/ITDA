const Users = require('../models/collegeSchema')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const register =async(req,res)=>{
    const{email,password}=req.body
try {
    if(!email && !password){
        return res.json("Email and Password both are required")
    }
    const user = await Users.create(req.body)
    res.json("Data sucessfully created" , user)
} catch (error) {
    res.json(error)
}
}

const login =async(req,res)=>{
    const{email , password}=req.body
    try {
        if(!email || !password){
            return res.json("Email and password are required")
        }
    
     const user=await Users.findOne({email,password})
     const token = jwt.sign({email:user.email ,id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
     if(user.role === "Teacher"){
    return res.json({message:`welcome ${user.role}` , user ,token})
         }
        if(user.role === "Student"){
         return res.json({message:`welcome ${user.role}`,user , token})
        }
    } catch (error) {
       res.json(error) 
    }
}


const dashboard =async(req,res)=>{
try {
    const user = await Users.findById(req.params.id)
    res.json(user)
} catch (error) {
    res.json(error)
}
}

module.exports = {register , login,dashboard}