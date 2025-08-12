import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <p>Logo</p>
      <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </nav>
    </div>
  )
}

export default Header
