import React, { createContext, useContext, useState } from 'react'
import NavLinks from './NavLinks'

export const NavUserContext = createContext() 
export const useAppContext =()=> useContext(NavUserContext)

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'erwin'
  })


  const logout =()=> {
    setUser(null)
  }
  return (
    <NavUserContext.Provider value={{user, logout}}>
      <h5>Context API</h5>
      <nav className='navbar'>
        <NavLinks  />
      </nav>
      </NavUserContext.Provider>
  )
}

export default Navbar