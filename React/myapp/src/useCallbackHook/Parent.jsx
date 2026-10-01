import React, { useCallback, useContext, useState } from 'react'
import Child from './Child'
import { VariableContext } from '../ContextAPI/VariableContext'

const Parent = () => {
    const username = useContext(VariableContext)
    const[search , setSearch]= useState("")
// const greet =()=>{
//     alert("hello Good Morning")
// }


const greet = useCallback(()=>{
    alert("Hello Good morning ")
},[])
console.log("This is Parent")
  return (
    <div>
        {username}
        this is Parent 
        <br />
    <input type="text" className='border-1 p-2 m-5' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <hr />
      <Child fun={greet}/>
    </div>
  )
}

export default Parent
