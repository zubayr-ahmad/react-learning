import Person from './Person';
import React, { useEffect } from 'react'
import { people } from '../../../data';
function List() {

  return (
    <div>
        <h1>People are coming</h1>
        {people.map((person) => {

            return <Person key={person.id} person = {person}></Person>
        })}
    </div>
  )
}

export default List
