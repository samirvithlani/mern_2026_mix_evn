import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  //register: to register input we can use it
  //handleSubmit : to handle submit event and process dat will use ..
  
  const submitHandler = (data) => {
    //data --  {}

    console.log("data..", data);
    setuserData(data); //{}
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="number" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label> <br></br>
          MALE:{" "}
          <input type="radio" value="male" {...register("gender")}></input>
          FEMALE:{" "}
          <input type="radio" value="female" {...register("gender")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>

      <div>
        <h1>OUTPUT</h1>
        <h1>NAme = {userData.name}</h1>
      </div>
    </div>
  );
};
