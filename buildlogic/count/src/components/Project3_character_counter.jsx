import React, { useState } from 'react'

const Project3_character_counter = () => {
  const[countText,setcountText]=useState("")
  const handlecountText=()=>
  {
    setcountText(countText.length)
  }
  return (
    <div>
      <input type='text'
      onClick={handlecountText}
      value={countText}
      onChange={(e)=>setcountText(e.target.value)}/>

      <p>Character Count-{countText}</p>
    </div>
  )
}

export default Project3_character_counter