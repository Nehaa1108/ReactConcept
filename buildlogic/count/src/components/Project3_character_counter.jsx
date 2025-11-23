import React, { useState } from 'react'

const Project3_character_counter = () => {
  const[countText,setcountText]=useState("")
 
  return (
    <div>
      <input type='text'
     
      value={countText}
      onChange={(e)=>setcountText(e.target.value)}/>

      <p style={{ color: countText.length > 20 ? "red" : "green" }}>
  {countText.length}
</p>

    </div>
  )
}

export default Project3_character_counter