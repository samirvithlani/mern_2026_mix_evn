import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2b = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //formState ->opbject-->form--> erros object..
  console.log("errors...", errors); //{}
  const submitHandler = (data) => {
    alert("form Subbmited...");
    console.log(data);
  };

  const validationSchema = {
    emailValidator:{
        required:{
            value:true,
            message:"email is required"
        },
        minLength:{
            value:6,
            message:"min len should b3 6"
        }
    }
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo2b</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
          {/* {}.name -->undefined.message //error */}
          {errors.name && errors.name.message}
        </div>
        <div>
            <label>Email</label>
            <input type="text" {...register("email",validationSchema.emailValidator)}></input>
            {errors.email && errors.email.message}
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
