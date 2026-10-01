import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
 const inputRef = useRef(null)
 const scrollRef = useRef(null)

 useEffect(()=>{
  inputRef.current.focus()
 },[])

 const scroll =()=>{
  scrollRef.current.scrollIntoView({behaviour:"smooth"})
 }

  return (
    <div>
      <input type="text" name="" id="" ref={inputRef}  className='border-2 p-2 m-2'/>
      <button className='border-1 p-1' onClick={scroll}>Scroll Down</button>
      <p className='mt-700 mb-100' ref={scrollRef}>This is scroll to bottom</p>
    </div>
  )
}

export default UseRefHook
