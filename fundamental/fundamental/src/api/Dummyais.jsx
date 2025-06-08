import React, { useEffect, useState } from 'react'

const Dummyais = () => {

  const [userList , setUserList] = useState([])
  const [loading,setLoading] = useState(false)



//3 way just adding this function name on button
  async function fetchAllUssers()
  {

    try {
      setLoading(true)
      const Response = await fetch('https://dummyjson.com/users')
      const result = await Response.json()


      if(result?.users)
      {
        setUserList((result?.users))
        setLoading(false)
      }
      else{
        setUserList([])
        setLoading(false)
      }

      console.log(result)
      
    } catch (error) {
      console.log(error)
    }
  }

  //1way

  // useEffect(()=>
  // {

  //   fetchAllUssers()

  // },[])



  //2way
  // const handlefetchListOfUsers =()=>
  // {
  //   fetchAllUssers()
  // }

  if(loading)
     return <h3>Fetching users! Please wait</h3>

  return (
    <div>
      <h1>All Users List--</h1>

      <button 
      // onClick={handlefetchListOfUsers}
      onClick={fetchAllUssers}
      >Fetch User List Data</button>

      <ul>
        {
          userList && userList.length >0 ? 
          userList.map(userItem=>
          
            <li key={userItem?.id}>
              <>{userItem?.firstName} {userItem?.lastName}</>
            </li> )
            :
            <h3>No users found! please try again...</h3>
          
         
        }
      </ul>

    </div>
  )
}

export default Dummyais