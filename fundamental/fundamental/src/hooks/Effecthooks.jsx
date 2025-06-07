import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Effecthooks = () => {


  const [count,setCount] = useState(0)
  const [changeColor,setchangeColor] = useState(false)




  const handleClick= ()=>
  {
    setCount(count+1)
  }

  useEffect(()=>
  {
   if(count ===10) setchangeColor(true)
    
  },[count])    //this is only run on page load once 

  return (
    <div>
      <h4>useEffect hooks.</h4>
      <p > Count is {count}</p>
     <button style={{backgroundColor : changeColor ? 'pink' : 'green'}} onClick={handleClick}>Increase Count</button>
    </div>
  )
}

export default Effecthooks