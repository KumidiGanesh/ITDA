const route = require('express').Router()
const {verifyToken}= require('../middleware/authMiddleware')
const {addUser , getUser , deleteUser , updateUser,getById}= require('../controllers/userController')


route.post('/api/adduser', addUser)
route.get('/api/getdetails',verifyToken, getUser)
route.get('/api/getuser/:id',getById)
route.delete('/api/delete/:id' , deleteUser)
route.put('/api/update/:id',updateUser)


module.exports = route
