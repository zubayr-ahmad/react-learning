import React, { useState } from 'react'
import NavLinks from './NavLinks'

function Navbar() {
    const [user, setUser] = useState({name: 'zubair'})
    const logout = () => {
        setUser({name: ''})
    }
  return (
    <nav className='navbar'>
        <h4>CONTEXT API</h4>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}

export default Navbar


