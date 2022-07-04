import React from "react" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthAmericas} className="nav--icon"></FontAwesomeIcon>
      <h3 className="nav--title">My Travel Journal</h3>
    </nav>
  )
}