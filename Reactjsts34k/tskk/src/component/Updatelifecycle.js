import React, { Component } from 'react'

export default class Updatelifecycle extends Component {
    constructor(){
        super()
        this.state ={
            firstName : "Adfar",
            count:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        
        console.log(nextProps,nextState)
        if(nextState.count >= 16){
            return false
        }
        else{
            return true;
        }
        
    }
  render() {
    return (
      <div>
        <h1>count is : {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
      </div>
    )
  }
}
