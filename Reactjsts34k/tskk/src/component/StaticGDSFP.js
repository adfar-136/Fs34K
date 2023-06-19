import React, { Component } from 'react'
const User = (props)=>(
    <div>
        <h1>{props.fName}</h1>
    </div>
)
export default class StaticGDSFP extends Component {
    constructor(){
        super()
        this.state={
            firstName :""
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived state")
        return {firstName:props.ffName}
    }
  render() {
    return (
      <div>
        
        <User fName={this.state.firstName}/>
      </div>
    )
  }
}
