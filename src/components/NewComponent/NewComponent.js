import React from 'react'
import  { Component } from 'react';
import Persons from '../Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'
import classes from './NewComponent.module.css'


class NewComponent extends Component{

  state = {
    persons:[
      {id : "asdadasdasd",name : 'Ashish', age : "25"},
      {id : "ewwrfd",name : 'Girish', age : "26"}
    ],
    showPersons : false
  }

  nameChangedHandler = (event, id) => {
    console.log(id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
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

    let btnClass = [classes.Button];
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePerson}
            changed = {this.nameChangedHandler}/>;
      btnClass.push(classes.Red)

    }



    return(
      <div>
        <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        click = {this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default NewComponent
