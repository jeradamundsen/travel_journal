import React from "react" 

export default function Card(props){
  return(
    <div className="card">
    
    <img src={`../images/${props.item.imageUrl}`} className="card--image" alt="travel pic"/>
    <div className="image--stats">
      <p className="card--location">{props.item.location}</p> 
      <p>{props.item.googleMapsUrl} <span>view on Google Maps</span></p>
      <p className="card--title">{props.item.title}</p>
    </div>
    
    
</div>
  )
}