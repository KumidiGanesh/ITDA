const route = require('express').Router()
const {register , login,dashboard}=require('../controllers/collegeController')
const {verifyToken}=require('../middleware/authMiddleware')
const {upload} = require('../fileUploads/cloud')

route.post('/api/register' ,register)
route.post('/api/login',login)
route.get('/api/dashboard/:id',verifyToken,dashboard)
route.post('/file/upload' , upload.single("image"),async(req,res)=>{
try {
    res.status(200).json("FILE Uploaded")
} catch (error) {
    res.status(400).json(error)
}
})


module.exports = route