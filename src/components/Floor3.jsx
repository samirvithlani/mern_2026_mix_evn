import React, { useContext } from 'react'
import { Floor2 } from './Floor2'
import { WaterContext } from './WaterContext'

export const Floor3 = () => {
    
    const {flow}= useContext(WaterContext)
  return (
    <div>
        <h3>FLOOR 3 - {flow}</h3>
        <Floor2></Floor2>
    </div>
  )
}
