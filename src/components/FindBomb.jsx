import React, { useMemo, useState } from 'react'

export const FindBomb = () => {
    const girdSize = 5;
    const totaltiles = girdSize * girdSize;
    const [clikcedTitles, setclikcedTitles] = useState([])
    const [gameOver, setgameOver] = useState(false)

   // console.log("clicked title...",clikcedTitles)
    //to check which box user has clicked...
    //const bombPos = Math.floor(Math.random()*totaltiles) -->to solve this useMemo

    const bombPos = useMemo(()=>{
        return Math.floor(Math.random()*totaltiles) 
    },[])

    console.log("bomb position - ",bombPos)
    const clickHandler = (index)=>{
        
        setclikcedTitles([...clikcedTitles,index])
        if(index==bombPos){
            //alert("booommmm....")
            setgameOver(true)
            //setclikcedTitles([])
            //timeout..
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FindBomb</h1>
        <div style={{
            display:"grid",
            gridTemplateColumns:`repeat(${girdSize},60px)`,
            gap:"10px",
            justifyContent:"center"
        }}>
            {
                Array.from({length:totaltiles}).map((elm,index)=>{
                    //box geenration
                    return <div 
                    onClick={()=>{clickHandler(index)}}
                    style={{
                        width:"60px",
                        height:"60px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                       // backgroundColor:"white",
                        backgroundColor:clikcedTitles.includes(index)?"gray":"white",
                        border:"1px solid black",
                        borderRadius:"5px",
                        cursor:"pointer"
                    }}>
                          {
                           gameOver &&  bombPos == index ? "💣" :index
                          }  
                    </div>
                })
            }

        </div>
    </div>
  )
}
