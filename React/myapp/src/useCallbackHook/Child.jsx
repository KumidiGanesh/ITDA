import React, { useContext } from 'react'
import { VariableContext } from '../ContextAPI/VariableContext'
const Child = React.memo(({fun}) => {
    const username = useContext(VariableContext)
    console.log("This is Child")
  return (
    <div>
        this is Child <br /> <br />
        {username}
      <button onClick={fun} className='border-1 p-2 m-2'>Greet</button>
    </div>
  )
})

export default Child
