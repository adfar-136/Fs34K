import React from 'react'
import Section from './Section'

export default function About(props) {
  return (
    <div>
        {props.fname} {props.age}
        I have 
        {props.person.name}
        {props.person.age}
        {props.person.skills}


       <li>{props.skills[0]}</li> 
       <li>{props.skills[1]}</li> 
       <li>{props.skills[2]}</li> 
       <li>{props.skills[3]}</li> 
        
        <Section firstname={props.fname} lastname={props.lname}/>
    </div>
  )
}
