import React, { useState } from 'react'

const Project2_password = () => {

  const[password,setpassword]=useState(false)
  const[InputValues,setInputValues]=useState("")
  const toggle=()=>
  {
    setpassword(!password)
  }
  return (
    <div>
      <input 
      type={password ? 'text' : 'password'} 
      placeholder='Enter Password'
      value={InputValues}
      onChange={(e)=>{setInputValues(e.target.value)}}/>
      <button onClick={toggle}>{password ? 'hide' : 'show'} </button>
    </div>
  )
}

export default Project2_password