import React, { useContext } from 'react'
import { GlobalContext } from './Contextapi'

const Buttoncontext = () => {

  const getStateFromGlobalContext = useContext(GlobalContext)

  return (
    <div>
      <button>
        Theme Change
      </button>
    </div>
  )
}

export default Buttoncontext