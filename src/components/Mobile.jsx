import React from 'react'
import { Chrger } from './Chrger'

export const Mobile = () => {
  var model = "iphone17"

  return (
    <div style={{textAlign:"center"}}>
        <h1>Mobile</h1>
        <Chrger model={model}></Chrger>
    </div>
  )
}
