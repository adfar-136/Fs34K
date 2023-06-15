import React, { Component } from 'react'

export default class Classcontrolled extends Component {
    constructor(){
        super()
        this.state={
           fname:"",
           lname:""
        }
    }
    
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder='Fullname' 
            onChange={(event)=>{this.setState({fname:event.target.value})}} />
            <input type="text" placeholder="Lastname" 
            onChange={(event)=>this.setState({lname:event.target.value})}/>
            <button type="submit">Submit</button>
        </form>
        {this.state.fname}
        <h1>You have typed {this.state.fname.length} letters</h1>
        <h1>You have typed {this.state.fname.split(" ").length-1} words</h1>
        <h1>{this.state.lname}</h1>
      </div>
    )
  }
}
