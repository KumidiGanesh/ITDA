const User = require('../models/userModel')

const addUser = async(req,res)=>{
try {
    const user =await User.create(req.body)
    res.json("Data Sucessfuly created")
} catch (error) {
    res.json(error)
}
}

const getUser =async(req,res)=>{
try {
    const details = await User.find()
    res.json(details)
} catch (error) {
    res.json(error)
}
}

const getById =async(req,res)=>{
try {
    const userid = await User.findById(req.params.id)
    res.json(userid)
} catch (error) {
    res.json(error)
}
}


const deleteUser =async(req,res)=>{
    try {
       const user = await User.findByIdAndDelete(req.params.id) 
       res.json({message:"User Sucessfully Deleted"})
    } catch (error) {
        res.json(error)
    }
}

const updateUser =async(req,res)=>{
try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id ,req.body ,{new:true} )
    res.json(updatedUser)
} catch (error) {
  res.json(error)  
}
}

module.exports = {addUser , getUser, deleteUser ,updateUser ,getById}