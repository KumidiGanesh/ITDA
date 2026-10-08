const express =require('express')
const mongoose  = require('mongoose')
const userroutes = require('./routes/userRoutes')
const collegeRoutes = require('./routes/collegeRoutes')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MONGODB CONNECTED")
})
.catch((error)=>{
    console.log(error)
})

app.use(userroutes)
app.use(collegeRoutes)

app.get('/',(req , res)=>{
res.send('Sucessfully created server ')
})

app.listen(process.env.PORT , ()=>{
console.log("Server Started Sucessfully")
})

