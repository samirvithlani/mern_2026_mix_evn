import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const ApiDemo4 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async(data)=>{
    console.log(data)
    //api call -->object
    const res = await axios.post("https://node5.onrender.com/user/user/",data)
    if(res.status ==200){
        alert("user added..")
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME</label>
            <input type="text" {...register("name")}></input>
        </div>
        <div>
            <label>AGE</label>
            <input type="text" {...register("age")}></input>
        </div>
        <div>
            <label>EMAIL</label>
            <input type="text" {...register("email")}></input>
        </div>
        <div>
            <label>PASSWORD</label>
            <input type="text" {...register("password")}></input>
        </div>
        <div>
            <label>STATUS</label>
            active: <input type="radio" value="true" {...register("isActive")}></input>
            not sactive: <input type="radio" value="true" {...register("isActive")}></input>
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
