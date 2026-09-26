import React, { useState } from 'react'

const Registration = () => {
    const[name , setName]=useState("")
    const[email , setEmail]= useState("")
    const[password , setPassword] =useState("")
    const[gender , setGender] = useState("")
    const[number , setNumber] = useState()

    const submitDetails =(e)=>{
         e.preventDefault()
        try {
             setEmail("")
         setGender("")
         setPassword("")
         setName("")
         } catch (error) {
            
         }

    }

    // console.log(name)
    // console.log(email)
    // console.log(password)
    // console.log(gender)

  return (
    <div className='justify-center align-center w-full bg-gray-50'> 
      <h1 className='text-center text-5xl mb-10'>Registration Form</h1>
     <div className='p-10 m-10 shadow-2xl w-1/2  m-auto bg-gray-300 justify-start'>
         <form action="">
        <label htmlFor="">Name : </label>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} className='border-1 mb-5 p-2  rounded-lg ' required/> <br />

        <label htmlFor="">Email : </label>
        <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className='border-1 mb-5 p-2  rounded-lg' required /> <br />

        <label htmlFor="">Password : </label>
        <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} className='border-1 mb-5 p-2  rounded-lg' required/> <br /> 

<label htmlFor="">Phone : </label>
        <input type="tel" name="" id="" value={number} onChange={(e)=>setNumber(e.target.value)} className='border-1 mb-5 p-2  rounded-lg' required/> <br /> 


        <select name="" id="" className='mb-5 border-1' value={gender} onChange={(e)=>setGender(e.target.value)} required>
             <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>  <br />
        <button onClick={submitDetails} className='border-1 rounded-lg bg-gray-600 text-white p-2 hover:bg-white hover:text-black'>Register</button>
      </form>
     </div>
    </div>
  )
}

export default Registration
