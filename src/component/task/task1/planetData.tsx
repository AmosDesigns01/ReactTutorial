import React from 'react'
import Planet from "./Planet"

const planetData = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Vennus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ]

  return (
    <div>
      {
        planets.map((planet) => {
          return (
            planet.isGasPlanet ? <Planet name={planet.name} /> : ""
          )
        })
      }
    </div>
  )
}

export default planetData