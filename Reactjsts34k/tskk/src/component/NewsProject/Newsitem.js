import React from 'react'
import "./Newsitem.css"
export default function Newsitem(props) {
  return (
    <div>
        <div className="card my-3" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} target='_blank' rel='noreferrer' className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}
