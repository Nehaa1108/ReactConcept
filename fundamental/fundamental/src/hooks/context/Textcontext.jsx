import React, { useContext } from 'react'
import { GlobalContext } from './Contextapi'

const Textcontext = () => {

  const {theme} = useContext(GlobalContext)

  return (
    <div>
      <h1 
      style={
{
  fontSize: theme === 'light ' ? '50px' : '100px',
  background : theme === 'light' ? 'pink' : 'lightgreen' ,
  color : theme === 'light' ? 'white' : 'black'
}
      }>Neha Gupta</h1>
    </div>
  )
}

export default Textcontext