import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
          console.log(index);
          return <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  click= {() => props.clicked(index)}
                  changename = {(event) => props.changed(event,person.id)} />
        });

export default persons
