import React from 'react'
import { HeadPhone } from './HeadPhone'

export const Chrger = (props) => {
  console.log("charger props",props)
  return (
    <div>
        <h1>Chrger</h1>
        
        <HeadPhone model = {props.model}></HeadPhone>
    </div>
  )
}
