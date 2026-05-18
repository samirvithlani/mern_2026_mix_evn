import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo5 = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({mode:"onChange"});


  const submitHandler = (data) => {
    console.log(data);
  };
  const password = watch("password") //it should match with register

  const validationSchema = {
    confirmPasswordValidator:{
        validate:(params)=>{
                //params == confirmPassword
            return params == password || "password does not match"
        }
    }
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 5</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>PASSWORD</label>
          <input type="text" {...register("password")}></input>
        </div>
        <div>
          <label>CONFIRM PASSWORD</label>
          <input type="text" {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
        </div>
        {errors.confirmPassword && errors.confirmPassword.message}
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
