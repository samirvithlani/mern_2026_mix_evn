import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {

    //const randomNo = Math.floor(Math.random()*1000)
    //()=>{} call back function
    //[] depdency array
    const [count, setcount] = useState(0)
    const [score, setscore] = useState(100)

    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[score])
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseMemoDemo</h1>
        <h3>Rno  ={randomNo}</h3>
        <h4>Count = {count}</h4>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        <button onClick={()=>{setscore(score+1)}}>++</button>

    </div>
  )
}
