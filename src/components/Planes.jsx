import React from 'react'
import './styles/planes.css'

const Planes = ({name, speed, range, capacity, image}) => {
  return (
    
    <article>
    
        <h2>{name}</h2>
        <ul>
            <li>Speed: {speed}</li>
            <li>Range: {range}</li>
            <li>Capacity: {capacity}</li>
        </ul>
        <img src={image} alt={name} />
    </article>
  )
}

export default Planes