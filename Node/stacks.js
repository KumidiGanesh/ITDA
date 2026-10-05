setTimeout(()=>{
    console.log("A")
},0)
setTimeout(()=>{
    console.log("B")
},0)
setTimeout(()=>{
    console.log("C")
},0)
setTimeout(()=>{
    console.log("D")
},0)
setTimeout(()=>{
    console.log("E")
},0)
setTimeout(()=>{
    console.log("F")
},0)

Promise.resolve().then(()=>console.log("Promise resolved"))

console.log("Call Stacks")