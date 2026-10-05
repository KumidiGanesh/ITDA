const http = require('http')

const server = http.createServer((req, res)=>{
res.end("Scuessfully u created a simple server")
})

server.listen(4500,()=>{
    console.log("server Started")
})