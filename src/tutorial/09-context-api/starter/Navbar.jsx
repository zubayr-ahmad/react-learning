import { useState, createContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext();
function Navbar() {
    const [user, setUser] = useState({name: 'zubair'})
    const logout = () => {
        setUser({name: ''})
    }
  return (
    <NavbarContext.Provider value={{user, logout}}>
    <nav className='navbar'>
        <h4>CONTEXT API</h4>
      <NavLinks />
    </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar


