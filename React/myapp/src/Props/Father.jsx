import React from 'react'

const Father = ({assest}) => {
  return (
    <div>
      <h1>This is from Father</h1>
     {
        assest.map((n)=>{
return (
    <>
    <p>{n}</p>
    </>
)
        })
     }
      {/* <button onClick={assest}>Click</button> <hr /> */}
    </div>
  )
}

export default Father
