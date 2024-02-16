import { useState, createContext } from 'react'
import NavLinks from './NavLinks'
import { useContext } from 'react'


export const NavbarContext = createContext();

// custom hook
export const useAppContext = () => useContext(NavbarContext);
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


