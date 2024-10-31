import React, {   useState } from 'react'
import { useAppContext } from './Navbar'


const UserContainer = () => {
const {user, logout} = useAppContext()
console.log(user)
  return (
    <div>
      <h3>Hello there: {user?.name?.toUpperCase()}</h3>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  )
}

export default UserContainer