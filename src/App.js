import React from "react" 
import Navbar from "./components/Navbar" 
import Card from "./components/Card" 
import {data} from "./data" 
import "./style.css"

export default function App(){
  console.log(data)
  const cards = data.map(item =>{
    console.log(item)
    return (
      <Card
        
        {...item}
        />
    )
  })
  return(
    <div className="container">
      <Navbar/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}