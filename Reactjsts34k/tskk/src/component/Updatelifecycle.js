import React, { Component } from 'react'

export default class Updatelifecycle extends Component {
    constructor(){
        super()
        this.state ={
            message : "",
            count:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        
        console.log(nextProps,nextState)
        if(nextState.count >= 18){
            return false
        }
        else{
            return true;
        }
        
    }
    componentDidUpdate(prevProps,prevState){
      console.log(prevProps,prevState)
      if(prevState.count === 16){
        this.setState({message:"You have reached the threshhold"})
      }
    }
  render() {
    return (
      <div>
        <h1>count is : {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
        {this.state.message && <h2>{this.state.message}</h2>}
      </div>
    )
  }
}
