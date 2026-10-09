const Users = require('../models/collegeSchema')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
dotenv.config()
const register =async(req,res)=>{
    const{name , role, department ,email,password}=req.body
try {
    if(!email && !password){
        return res.json("Email and Password both are required")
    }

    const hashpassword = await bcrypt.hash(password , 10)
    const user = await Users.create({name , email , password:hashpassword,department , role})
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
    
     const user=await Users.findOne({email})

     const isMatch = await bcrypt.compare(password , user.password)

     if(!isMatch){
        return res.json("Invalid credentials ")
     }

    const token = jwt.sign({email:user.email,id:user._id},process.env.JWT_SECRET,{expiresIn:"10m"})
     if(user.role === "Teacher"){
    return res.json({message:`welcome ${user.role}` , user,token })
         }
        if(user.role === "Student"){
         return res.json({message:`welcome ${user.role}`,user,token })
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