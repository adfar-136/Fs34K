import React, { Component } from 'react'

export default class Classbased extends Component {
   constructor(){
    super()
    console.log("Adfar")
   }
  render() {
    console.log("render")
    return (
      <div>
        <h1>Class based component </h1>
        <h2>{this.props.name}</h2>
        <p>{this.props.arr.map((item,index)=>{
            return (
                <li>{item}</li>
            )
        })}</p>
      </div>
    )
  }
}
