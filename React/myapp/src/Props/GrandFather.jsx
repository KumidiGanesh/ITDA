import React from 'react'
import Father from './Father'
import Daughter from './Daughter'

const GrandFather = () => {
// const land = ()=>{
//     alert("This is from parent")
// }

const land = ["hello" ,"bye","Good morning","Goode evening"]

// const land ={
//     name:"Bharath"
// }

  return (
    <div>
      <h1>This is from Grand Father </h1> <hr />
      <Father assest={land} />
      <Daughter assest={land}/>
    </div>
  )
}

export default GrandFather
