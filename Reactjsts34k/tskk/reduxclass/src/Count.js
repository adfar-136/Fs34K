import React, { Component } from 'react'
import { increment,decrement } from './Store/action'
import { connect } from 'react-redux'
class Count extends Component {
  render() {
    const {count,increment,decrement} = this.props

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>decrement()}>Decrement</button>

      </div>
    )
  }
}
const mapStatetoProps =(state)=>(
    {
    count:state
 }
)
const mapDispatchToProps = (dispatch)=>(
    {
     increment:()=>dispatch(increment()),
     decrement:()=>dispatch(decrement())
    }
)
export default connect(mapStatetoProps,mapDispatchToProps)(Count)