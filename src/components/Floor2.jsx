import React, { useContext } from 'react'
import { Floor1 } from './Floor1'
import { WaterContext } from './WaterContext'

export const Floor2 = () => {
  const {detail} = useContext(WaterContext)
  return (
    <div>
        <h3>FLOOR 2</h3>
        <button onClick={()=>{detail(100)}}>DETAIL</button>
        <Floor1></Floor1>
    </div>
  )
}
