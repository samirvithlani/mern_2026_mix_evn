import React from 'react'

export const MapDemo1 = () => {

    var marks = [20,30,35,67,89] //array

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            marks.map((m)=>{
                return <li>{m}</li>
            })
        }
    </div>
  )
}
