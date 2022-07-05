import React from "react" 

export default function Card(props){
  return(
    <div className="card">
    <img src={`../images/${props.img}`} className="card--image" />
    <p className="card--location">location {props.googleMapsUrl} <span>view on Google Maps</span></p>
    <p className="card--title">{props.title}</p>
    
</div>
  )
}