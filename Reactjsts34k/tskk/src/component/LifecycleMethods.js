import React, { Component } from 'react'

export default class LifecycleMethods extends Component {
    constructor(){
        super()
        this.state={
            firstName : "Adfar"
        }
        console.log("Constructor called")
    }
    static getDerivedStateFromProps(){
        console.log("GDSFP called")
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({firstName:"Hello Adfar"})        
        },5000)
    }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    )
  }
}
