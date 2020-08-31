import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) =>{
  let assginedClasses = [];
  let buttonClass = ''
  if(props.showPersons){
    buttonClass = classes.Red;
  }
  if(props.persons.length <= 1){
    assginedClasses.push('red');
  }
  if(props.persons.length === 0){
    assginedClasses.push('bold');
  }

  return (
      <div className = {classes.Cockpit}>
      <p className={assginedClasses.join(' ')}> Hello from class component </p>
      <button className={buttonClass} onClick = {props.click}>Toggle Button</button>
      </div>
    );
}

export default cockpit
