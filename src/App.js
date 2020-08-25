import React, { useState } from 'react';
import  { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

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


class NewComponent extends Component{

  state = {
    persons:[
      {name : 'Ashish', age : "25"},
      {name : 'Girish', age : "26"}
    ],
    showPersons : false
  }
  switchNameHandler = () => {
    this.setState({
      persons:[
        {name : 'Ashish Prabhune', age : "25"},
        {name : 'Girish', age : "26"}
      ]
    });
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name : 'Ashish', age : "25"},
        {name : event.target.value, age : "26"}
      ]
    });
  }

  togglePersonsHandler = () =>{
    const showStatus = this.state.showPersons;
    this.setState(
      {showPersons : !showStatus}
    )
  }



  render(){
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changename = {this.nameChangedHandler}> I am Single </Person>
        </div>
      )
    }

    return(
      <div>
        <p> I'am </p>
        <button style = {style} onClick = {this.togglePersonsHandler}>Toggle Button</button>
        {persons}
      </div>
    )
  }
}
export default App;
