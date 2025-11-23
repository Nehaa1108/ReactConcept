import React, { useState } from 'react'

const Project4_inputname_show = () => {
  const [InputValue,setInputValue] = useState("")
  const usersName=['Neha','Sann','Gupta','Priya','Krishna']

    // Filter logic
  const filteredUsers = usersName.filter(name =>
    name.toLowerCase().includes(InputValue.toLowerCase())
  );

  return (
    <div>

      <p>Name: {InputValue}</p>

      <input type='text'
      placeholder="Search user..."
      value={InputValue}
      onChange={(e)=>setInputValue(e.target.value)}/>
       <ul>
        {filteredUsers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Project4_inputname_show