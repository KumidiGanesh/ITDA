import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
const[count , setCount]=useState(0)
const[search , setSearch]=useState("")

const inc =()=>{
    setCount(count+1)
}
// const double = ()=>{
//         console.log("Doubled")
//     return count*2
// }
// double()

const double = useMemo(()=>{
    console.log("double")
    return count *2
},[count])


  return (
    <div>
        <p className='m-3'>Count is {count}</p>
        <p>{double}</p>
        <button onClick={inc} className='border-1 p-1 m-3'>Inc</button> <br />
      <input type="text" name="" id="" value={search} onChange={(e)=>{setSearch(e.target.value)}} className='border-1 p-2 m-20' />
    </div>
  )
}

export default UseMemoExample
