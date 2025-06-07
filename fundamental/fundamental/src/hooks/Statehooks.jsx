import React, { useState } from 'react'

const Statehooks = () => {


  const [flag,setFlag] = useState(false)

  const handleClick =()=>
  {
    setFlag(!flag)
  }
  return (
    <div>
      
      {
        flag ? <p>State hooks.</p> 
        :
        <p>state hooks not found.</p>
      }
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate vel tenetur error quae? Molestias illum sit quas ab animi.</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Statehooks