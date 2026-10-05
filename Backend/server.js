const express =require('express')
const mongoose  = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/bharathreddy')
.then(()=>{
    console.log("MONGODB CONNECTED")
})
.catch((error)=>{
    console.log(error)
})

app.get('/',(req , res)=>{
res.send('Sucessfully created server ')
})

app.listen(5000 , ()=>{
console.log("Server Started Sucessfully")
})

