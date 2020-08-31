import React, { useState } from 'react';
import  { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components'


function App() {
  const [personsState, setPersonsState] = useState({
    persons:[
      {name : 'Ajit', age : "25"},
      {name : 'Puki', age : "26"}
    ],
    otherState : "Hello"
  })
  const [showPersonsState, setShowPersonState] = useState({
    showPersons : false
  })
  const switchNameFuncHandler = () =>{
    setPersonsState({
      persons:[
        {name : 'Ajit BusNaik', age : "25"},
        {name : 'Puki Datar', age : "26"}
      ],
    })
  }
  const togglePersonsHandler = () =>{
    const showStatus = showPersonsState.showPersons
    setShowPersonState({
      showPersons : !showStatus
    })
    console.log(showPersonsState);
  }
  const style = {
    backgroundColor: 'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px'
  };
  let persons = null;
  if(showPersonsState.showPersons){
    persons = (
      <div>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} />
      </div>
    )
  }
  console.log(persons);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I ' am react's hello world.
        </p>
        <button style = {style} onClick = {togglePersonsHandler}>Swtich Name</button>
        <div> This is from functional state</div>
        {persons}
        <NewComponent/>
      </header>
    </div>
  );
}

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color:white;
      font:inherit;
      border: 1px solid blue;
      padding: 8px;
      &:hover{
        background-color: ${props => props.alt ? 'salmon' : 'red'};
        color:black;
      }
`

class NewComponent extends Component{

  state = {
    persons:[
      {id : "asdadasdasd",name : 'Ashish', age : "25"},
      {id : "ewwrfd",name : 'Girish', age : "26"}
    ],
    showPersons : false
  }

  nameChangedHandler = (event, id) => {
    console.log("Changing name");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    console.log(id);
    const newPerson = {
      ...this.state.persons[personIndex]
    }
    newPerson.name = event.target.value
    const newPersonState = [...this.state.persons]
    newPersonState[personIndex] = newPerson
    this.setState({ persons:newPersonState });
  }

  togglePersonsHandler = () =>{
    const showStatus = this.state.showPersons;
    this.setState(
      {showPersons : !showStatus}
    );
  }

  deletePerson = (index) => {
    const personCopy = this.state.persons.slice();
    personCopy.splice(index,1);
    this.setState({
      persons : personCopy
    });
    console.log(this.state.persons);

  }


  render(){

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              console.log(person.id);
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click= {() => this.deletePerson(index)}
                changename = {(event) => this.nameChangedHandler(event,person.id)}/>
            })
          }
        </div>
      );

    }

    let classes = [];

    if(this.state.persons.length <= 1){
      classes.push('red');
    }
    if(this.state.persons.length == 0){
      classes.push('bold');
    }

    return(
      <div>
        <p className={classes.join(' ')}> Hello from class component </p>
      <StyledButton alt={this.state.showPersons} onClick = {this.togglePersonsHandler}>Toggle Button</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
