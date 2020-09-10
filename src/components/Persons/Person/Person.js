import React from "react"
import classes from './Person.module.css'
import styled from 'styled-components'
import Aux from '../../../hoc/Auxilliary'
import withClass from '../../../hoc/withClass'
const person = (props) => {

  return (

        <Aux>
          <p  onClick={props.click}> I am {props.name}. My age is {props.age}</p>
          <p > {props.children}</p>
          <input type="text" onChange = {props.changename} value={props.name}/>
        </Aux>
        );
}

export default withClass(person,classes.Person)
