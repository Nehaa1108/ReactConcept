import React, { createContext } from 'react'



//create the context
export const GlobalContext = createContext(null)




//create the global state that receit component as a child
function GlobalState({childree})
{
  return <GlobalContext.Provider value={{}}> {childree}

  </GlobalContext.Provider>
}




//prop drilling---
