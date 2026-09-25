import React, { useState } from 'react'

const Password = () => {
const[inputPassword , setInputPassword]=useState("")
const[showPassword , setShowPassword] = useState(false)


const togglePassword =()=>{
    setShowPassword(!showPassword)
}

  return (
    <div>
      <h1>Password</h1>
      <input type={showPassword?"text":"password"} name="" id="" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} />
      <button onClick={togglePassword}>{showPassword?"HIDE":"SHOW"}</button>
    </div>
  )
}

export default Password
