import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const {register,handleSubmit,formState:{errors},trigger} =useForm()
    const [step, setstep] = useState(1)
    const submitHandler = (data)=>{
            console.log(data)
    }
    const next = async()=>{
        const valid = step===1 ? await trigger(["name","age"]) : await trigger(["email"])
        if(valid) setstep(step+1)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                step ===1 && <div>
                    <div>
                        <label>Name</label>
                        <input type='text' {...register("name",{required:{value:true,message:"name is require !"}})}></input>
                        {errors.name && errors.name.message}
                    </div>
                    <div>
                        <label>Age</label>
                        <input type='text' {...register("age")}></input>
                    </div>
                    <div>
                        <button onClick={next}>Next</button>
                    </div>
                </div>
            }
            {
                step ===2 &&<div>
                    <div>
                        <label>Email</label>
                        <input type='text' {...register("email",{required:{value:true,message:"email is required"}})}></input>
                    </div>
                    <div>
                        <button onClick={()=>{setstep(step-1)}}>BACK</button>
                        <input type='submit'></input>
                    </div>

                </div>
            }
        </form>    
    </div>
  )
}
