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
            {/* give lable sellect country in dropdown and it should be disabled */}
            {/* checkbox implmentation  output map*/}
            {/* create 1 more form of this kind having 10 fileds min */}
            <label>SELECT COUNTRY</label>
            <select {...register("country")}>
                <option value="india">INDIA</option>
                <option value="china">CHINA</option>
                <option value="russia">RUS</option>

            </select>
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
