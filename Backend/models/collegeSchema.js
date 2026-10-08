const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    department:String,
    password:{
        type:String,
        required:true,
        min:6
    },
    role:{
        type:String,
        enum:["Student" ,"Teacher","Manager"],
        default:"Student"
    }
})
module.exports = mongoose.model('Users' ,collegeSchema)