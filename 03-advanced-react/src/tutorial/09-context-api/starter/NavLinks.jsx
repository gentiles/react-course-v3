import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = () => {

  return (
    <section className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer />
    </section>

  )
}

export default NavLinks