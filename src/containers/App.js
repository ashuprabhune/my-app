import React, { useState } from 'react';
import  { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewComponent from '../components/NewComponent/NewComponent'
import styled from 'styled-components'


function App() {
  /*
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
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I ' am react's hello world.
        </p>
        <NewComponent/>
      </header>
    </div>
  );
}





export default App;
