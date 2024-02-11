import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

function UserContainer() {
    const value = useContext(NavbarContext)
    // console.log(user, logout);
    console.log(value);
    const { user, logout } = value

    return (
        <div className='user-container'>
            {user ? (<>
                <p>Hello there, <b>{user?.name?.toUpperCase()}</b></p>
                <button className='btn' onClick={logout}>Logout</button>
            </>) : (
                <p>Please login</p>
            )}

        </div>
    )
}

export default UserContainer
