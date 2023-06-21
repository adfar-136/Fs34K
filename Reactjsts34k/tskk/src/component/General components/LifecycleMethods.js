import React, { Component } from 'react'

export default class LifecycleMethods extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
        
    }
    // static getDerivedStateFromProps(){
    //     console.log("GDSFP called")
    // }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({firstName:"Hello Adfar"})        
        // },5000
        console.log("component did mount invoked")
    }
    componentDidUpdate(){
      console.log("component did update invoked")
    }
  render() {
    
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update class</button>
      </div>
    )
  }
}
