import React, { useRef } from 'react'

const UseRefHook = () => {
 const inputRef = useRef(null)
console.log(inputRef)

  return (
    <div>
      <input type="text" name="" id=""  className='border-2 p-2 m-2'/>
      <button >hello</button>
      <p>Hello Good afternoon</p>
      <h1 ref={inputRef}>Hello guys this useref class</h1>
    </div>
  )
}

export default UseRefHook
