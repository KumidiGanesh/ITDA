const route = require('express').Router()
const {register , login,dashboard}=require('../controllers/collegeController')
const {verifyToken}=require('../middleware/authMiddleware')

route.post('/api/register' ,register)
route.post('/api/login',login)
route.get('/api/dashboard/:id',verifyToken,dashboard)


module.exports = route