import React from "react" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){
  console.log(props)
  return(
    <div className="card">
      
      <img src={`../images/${props.imageUrl}`} className="card--image" alt="travel pic"/>
      <div className="card-info">
      <div className="location-info">
        <p className="card--location"><span> <FontAwesomeIcon icon={faMapMarker} className="map-marker"></FontAwesomeIcon></span>{props.location}</p> 
        <a href="{props.googleMapsUrl}" className="card--location-url">View On Google Maps</a>
      </div>
        <h2 className="card--title">{props.title}</h2>
        <div className="card--date">{props.startDate}</div>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
    
    

  )
}