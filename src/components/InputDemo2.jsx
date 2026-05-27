import React, { useState } from "react";

export const InputDemo2 = () => {
  const [country, setcountry] = useState("");
  const [gender, setgender] = useState("");
  const [selectedDate, setselectedDate] = useState("")
  const [result, setresult] = useState("")
  
  const dateHandler = (e)=>{
    console.log(e.target.value)
    const value = e.target.value
    setselectedDate(value)

    const inputDate = new Date(value) //date object
    const today = new Date() //today

    //remove time
    inputDate.setHours(0,0,0,0)
    today.setHours(0,0,0,0)

    const difftime = inputDate-today; //mills
    console.log(difftime)
    const diffDays = difftime/ (1000*60*60*24)
    console.log(diffDays)

    if(diffDays==0){
      setresult("today")
    }
    else if(diffDays== -1){
      setresult("yesterday")
    }
    else if(diffDays== 1){
      setresult("tomorrow")
    }
    else if(diffDays<0){
      setresult(`${Math.abs(diffDays)} days ago`)
    }
    else{
      setresult(`${Math.abs(diffDays)} days later`)
    }





  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>INPUT DEMO 2</h1>
      <div>
        <select
          onChange={(e) => {
            setcountry(e.target.value);
          }}
        >
          <option value="india">INDIA</option>
          <option value="russia">Russia</option>
          <option value="china">China</option>
        </select>
        {country}
      </div>
      <div>
        <label>Gender</label>
        <br></br>
        MALE :
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>
        FEMALE :
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>
        {gender}
      </div>
      <div>
        <label>SELECT DATE</label>
        <input type="date" onChange={(e)=>{dateHandler(e)}}></input>
        <h1>{result}</h1>
      </div>
    </div>
  );
};
