import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I am react's hello world.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
        {name : 'Ashish Prabhune', age : "30"},
        {name : 'Girish', age : "26"}
      ]
    });
  }

  render(){
    return(
      <div>
      <button onClick = {this.switchNameHandler}>Swtich Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I am Single </Person>
      </div>
    )
  }
}
export default App;
