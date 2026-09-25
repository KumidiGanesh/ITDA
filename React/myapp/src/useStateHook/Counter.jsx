import React, { useState }  from 'react'

const Counter = () => {
const [count , setCount] = useState(0)
const [marks , setMarks] = useState()
const [grade , setGrade] = useState("")

const[number , setNumber] = useState()
const [day ,setDay] =useState("")

console.log(number)
console.log(day)
const tellday =()=>{
    switch(number){
    case 1 :
        setDay("Monday")
        break;
    case 2:
        setDay("Tuesady")
        break ;

    }
    
    }


const grades =()=>{

    if(marks > 100){
        setGrade("Invalid marks")
    }
    else if(marks >= 90 && marks <=100){
       setGrade("A GRADE")
    }
}

const inc =()=>{
setCount(count+2)
}

const dec =()=>{
setCount(count-10)
}

const reset = ()=>{
setCount(100)
}
  return (
    <div>
      <h1>Counter</h1>

      <p>Count is :{count}</p>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>


      <input type="number" name="" value={marks} onChange={(e)=>setMarks(e.target.value)}  />
      <button onClick={grades}>check grade</button> <br />

      <input type="number" name="" id="" value={number} onChange={(e)=>setNumber(Number(e.target.value))}/>
      <button onClick={tellday}>Search day</button>
<p>the Day is {day}</p>

      <p>{grade}</p>
    </div>
  )
}

export default Counter
