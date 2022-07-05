import React from "react" 
import Navbar from "./components/Navbar" 
import Card from "./components/Card" 
import travelData from "./data" 

export default function App(){
  const cards = travelData.map(item =>{
    return (
      <Card
        key={item.description}
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