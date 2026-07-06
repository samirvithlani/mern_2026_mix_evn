import React, { useContext } from 'react'
import { WaterContext } from './WaterContext'

export const Floor1 = () => {
  const {flow}= useContext(WaterContext)
  return (
    <div>
        <h3>FLOOR 1 = {flow}</h3>
    </div>
  )
}
