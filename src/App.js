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

  const switchNameFuncHandler = () =>{
    setPersonsState({
      persons:[
        {name : 'Ajit BusNaik', age : "25"},
        {name : 'Puki Datar', age : "26"}
      ]
    })
  }

  console.log(personsState);
  const style = {
    backgroundColor: 'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I ' am react's hello world.
        </p>
        <button style = {style} onClick = {switchNameFuncHandler}>Swtich Name</button>
        <div> This is from functional state</div>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} />
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
    ]
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

  render(){
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    return(
      <div>
      <p> I'am </p>
      <button style = {style} onClick = {this.switchNameHandler}>Swtich Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changename = {this.nameChangedHandler}> I am Single </Person>
      </div>
    )
  }
}
export default App;
