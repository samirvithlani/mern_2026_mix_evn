import React from 'react'

export const ConditinalStylingDemo1 = () => {
    var age = 2;
    var salary = 50000;
    var year =2026
    var user ={
        name:"raj",
        marks :79
    }
  return (
    <div>
        <h1>ConditinalStylingDemo1</h1>
        <h1 style={{color:age>18?"green":"red"}}>AGE = {age}</h1>
        <h1 style={{backgroundColor:salary>45000 ? "yellow":"white"}}>SALARY = {salary}</h1>
        <h1 style={{backgroundColor:salary>45000 && "yellow"}}>SALARY = {salary} </h1>
        <h1>{year} {year == 2026 && "Current year"}</h1>
        <h1 style={{backgroundColor:user.marks>70 && "red"}}>Name = {user.name}</h1>
        
    </div>
  )
}
