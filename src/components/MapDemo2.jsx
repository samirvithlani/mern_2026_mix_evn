import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"amit",age:23},
        {id:2,name:"sumit",age:24},
        {id:3,name:"raj",age:25}
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 2</h1>
        {
            users.map((u)=>{
                return <li>{u.id} - {u.name} - {u.age}</li>
            })
        }
    </div>
  )
}
