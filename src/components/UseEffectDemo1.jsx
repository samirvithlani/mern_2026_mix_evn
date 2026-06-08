import React, { useEffect, useState } from 'react'


export const UseEffectDemo1 = () => {

    //useEffect will call once after component mount in memory
    //if we have state variable and any changes happen to that variable on 
    //depedend on that we can re call useEffect
    const [count, setcount] = useState(0)

    useEffect(()=>{
        //logic body..
        console.log("use effect called...")

    },[count])
    //if any changes happens to count useEffect wil call again..


  return (
    <div style={{textAlign:"center"}}>
        <h1>UseEffectDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Count</button>
    </div>
  )
}
