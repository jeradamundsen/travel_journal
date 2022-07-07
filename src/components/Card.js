import React from "react" 

export default function Card(props){
  console.log(props)
  return(
    <div className="card">
      <img src={`../images/${props.imageUrl}`} className="card--image" alt="travel pic"/>
      <div className="card-info">
        <p className="card--location">{props.location}</p> 
        <p className="card--location-url">{props.googleMapsUrl} <span>view on Google Maps</span></p>
        <h2 className="card--title">{props.title}</h2>
        <div className="card--date">{props.startDate}</div>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
    
    

  )
}