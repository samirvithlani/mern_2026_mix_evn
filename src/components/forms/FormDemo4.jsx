import React from "react";
import { useForm } from "react-hook-form";

//required,min,max,minLenght,...,validate,pattern
export const FormDemo4 = () => {

    const refcodeList =["insta","facebook","justdial","news paper"]

  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm({mode:"all"}); //onChange onSubmit onBlur all
  const submitHandler = (data)=>{
    console.log(data)
  }
  console.log("errors",errors)


  

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required*"
            }
        },
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            validate:(params)=>{
                //console.log("params",params)
                //return params=="facebook" || "not valid ref code"
                return refcodeList.includes(params) || "not valid ref code"
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobby is required*"
            },
            validate:(params)=>{
                    //checkbox -->array -->len
                //console.log("params for hobbies",params)
                return params.length >=2 || "min 2 hobbies are required*"
            }
        }
    }  


  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name",validationSchema.nameValidator)}></input>
          {errors.name && errors.name.message}
        </div>
        <div>
            <label>REF CODE</label>
            <input type="text" {...register("refcode",validationSchema.refCodeValidator)}></input>
            {errors.refcode && errors.refcode.message}
        </div>
        <div>
            <label>HObbies</label><br></br>
            Reading : <input type="checkbox" value="reading" {...register("hobbies",validationSchema.hobbiesValidator)}></input> <br></br>
            Travel : <input type="checkbox" value="travel" {...register("hobbies",validationSchema.hobbiesValidator)}></input><br></br>
            Scrolling : <input type="checkbox" value="scrolling" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
            Sleeping : <input type="checkbox" value="sleeping" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
            {errors.hobbies && errors.hobbies.message}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
