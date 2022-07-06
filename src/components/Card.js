import React from "react" 

export default function Card(props){
  console.log(props)
  return(
    <div className="card">
    
    <img src={`../images/${props.imageUrl}`} className="card--image" alt="travel pic"/>
    <div className="image--stats">
      <p className="card--location">{props.location}</p> 
      <p>{props.googleMapsUrl} <span>view on Google Maps</span></p>
      <p className="card--title">{props.title}</p>
    </div>
    
    
</div>
  )
}