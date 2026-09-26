import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
const navigate = useNavigate()

  return (
    <div>
      


      <button onClick={()=>navigate('/counter/count')} className='border-2 hover:bg-sky-700 rounded-md p-2 m-2 bg-red-600 '>Counter</button>
      <button onClick={()=>navigate('/navbar')} className='p-2 m-2 bg-green-400'>Navbar</button>
      <button onClick={()=>navigate('/props')}>Props</button>
      <button onClick={()=>navigate('/password')}>Password</button>
      <button onClick={()=>navigate('/register')}>Register</button>
    </div>
  )
}

export default Home
