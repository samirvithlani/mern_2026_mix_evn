import React from "react";

export const ContentComponent = () => {
     //js code..
      var year = 2026; //number
      var name = "REACT JS";
      var isAvailable = true;
      //json object
    
      var student = {
        name: "amit",
        age: 23,
      };

      
  return (
    <div style={{height:"auto",border:"1px solid black",minHeight:"500px",padding:"10px"}}>
      <h1>HELLO ALL</h1>
      <h3>WHATEVER WRITTEN IN RETURN STATMENT WILL DISPLAY TO BROWSER</h3>
      <h3>EVERY TAG MUST HAVE CLOSING TAG</h3>
      <h4>AT A TIME WE CAN RETURN ONLY 1 ELEMENT</h4>
      {year}
      <h1 style={{color:"blue"}}>YEAR = {year}</h1>
      <h2>TECH = {name}</h2>
      <h3>Available = {isAvailable == true ? "YES" : "No"}</h3>

      <h1>Student Name = {student.name}</h1>
      <h2>Student Age = {student.age}</h2>
    </div>
  );
};
