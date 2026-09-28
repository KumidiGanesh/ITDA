import React, { useState , useEffect } from 'react'

const Value = () => {
  const[count , setCount]=useState(0)
  const[ type , setType]=useState("EVEN")

  const inc =()=>{
    setCount(count+1)
  }

  const dec =()=>{
    setCount(count -1)
  }

  useEffect(() => {
if(count%2===0){
    setType("EVEN")
  }else{
    setType("ODD")
  }
  }, [count])
  
  return (
    <div>
      <p>Count is {count}</p>
      <p>Type : {type}</p>
      <button className='border-2 p-2 m-2' onClick={inc}>Inc</button>
      <button className='border-2 p-2 m-2' onClick={dec}>Dec</button>
    </div>
  )
}

export default Value
