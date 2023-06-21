import React from 'react'
import Adfar from './Adfar'

export default function Section(props) {
  return (
    <div>Section
        <Adfar fname={props.firstname} lname={props.lastname}/>
    </div>
  )
}
