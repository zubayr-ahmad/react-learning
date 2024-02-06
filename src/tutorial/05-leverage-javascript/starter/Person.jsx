import avatar from '../../../assets/default-avatar.svg';
import React from 'react'

function Person(person) {
    const { name, nickName = 'pro player', images } = person.person;
    const img = images?.[0]?.small?.url || avatar;
    return (
        <div>
            <img src={img} alt={name} style={{width:"60px"}} />
            <h3><b>{name}</b></h3>
            <p>{nickName}</p>
        </div>
    )
}

export default Person
