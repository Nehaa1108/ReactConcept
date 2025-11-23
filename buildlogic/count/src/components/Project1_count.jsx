import React, { useState } from 'react'

const Project1_count = () => {

  // const [count,setCount] = useState(0)

  const [countinde,setCountinde] = useState(0)
  
  
//   const handleClick=()=>
// {
//  setCount(count+1)
// }

const handleIncrement=()=>
{
  setCountinde(countinde+1)
}


const handleDecrement=()=>
{
  setCountinde(countinde-1)
}
const handleReset=()=>
{
  setCountinde(0)
}
  return (
    <div>
      {/* <button type='button' onClick={handleClick} >Count {count}</button> */}

      <div>
        count {countinde}
        <button type='button' onClick={handleIncrement}>+ </button>
        <button type='button' onClick={handleDecrement}>- </button>
        <button type='button' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Project1_count