import React, { useEffect, useState } from 'react'

const UseEffectAPIall = () => {
    const[data , setData]=useState([])

  const details =()=>{
    try {
        const datas = fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then((user)=>{
      setData(user)
   })
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    details()
  },[])

console.log(data)

  return (
    <div>
      <button className='border-2 p-2 m-20' onClick={details}>Get Data</button>
      {
        data.map((user)=>{
            return (
                <>
                <p>{user.name}-------{user.email}</p>
                </>
            )
        })
      }
    </div>
  )
}

export default UseEffectAPIall
