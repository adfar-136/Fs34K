import React, { Component } from 'react'

export default class Formclass extends Component {
    constructor(){
        super()
        this.fname = React.createRef()
        this.lname = React.createRef()
        this.state ={
            condition : false
        }
        
    }
    submitForm =(event)=>{
        event.preventDefault()
        this.setState({condition:true})
        console.log(this.fname.current.value,this.fname.current.placeholder,
            this.lname.current.value)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
            <input type="text" placeholder='Firstname' ref={this.fname} /> <br /><br />
            <input type="text" placeholder='LastName' ref={this.lname}/><br /><br />
            <button type='submit'>Submit</button>
        </form>
        {this.state.condition?(<h1>{this.fname.current.value}</h1>):
        (<h1>jhkdsfgd</h1>)}
        

      </div>
    )
  }
}
