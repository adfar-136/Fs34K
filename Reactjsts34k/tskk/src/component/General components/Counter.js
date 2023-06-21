import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0,
            name:""
        }
    }
    addOne=()=>{
        this.setState({count:this.state.count+1})
    }
    minusOne=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        {/* <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
       <h1> {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button> */}
        <button onClick={this.minusOne}>-</button>
       <h1> {this.state.count}</h1>
        <button onClick={this.addOne}>+</button>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Adfar Rashid"})}>Generate Name</button>
      </div>
    )
  }
}
