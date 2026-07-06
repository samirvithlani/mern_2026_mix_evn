import React from 'react'
import { Floor3 } from './Floor3'
import { WaterContext } from './WaterContext'

export const WaterFlow = () => {
    var flow = "water"
    const detail = (x)=>{
      alert("detail.."+x)
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>WaterFlow</h1>
        <WaterContext.Provider value={{flow,detail}}>
            <Floor3></Floor3> 
        </WaterContext.Provider>
    </div>
  )
}
