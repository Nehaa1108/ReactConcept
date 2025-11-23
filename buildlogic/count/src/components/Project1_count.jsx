import React, { useState } from 'react'

const Project1_count = () => {

  // const [count,setCount] = useState(0)

  const [countinde,setCountinde] = useState(0)
  

  const handleIncrementby2=()=>
  {
    setCountinde(countinde+2)
  }

   const handledecrementby3=()=>
  {
    setCountinde(countinde-3)
  }
  
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

        increment by 2 decrement by 3 and reset
        <button onClick={handleIncrementby2}
        disabled={countinde>=10}>+</button>
        <button onClick={handledecrementby3} 
        disabled={countinde<=0}
        
        >-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Project1_count