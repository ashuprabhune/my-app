import React, { useState } from 'react';
import  { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css'
import Aux from '../hoc/Auxilliary'
import withClass from '../hoc/withClass'

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
  console.log(classes);
  return (

    <Aux>
      <header className={classes.Appheader}>
        <img src={logo} className={classes.Applogo} alt="logo" />
        <p>
          Hi I ' am react's hello world.
        </p>
        <NewComponent/>
      </header>
    </Aux>
  );
}





export default withClass(App,classes.App);
