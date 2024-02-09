import React from 'react'

function UserContainer({ user, logout }) {
    // console.log(user, logout);
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
