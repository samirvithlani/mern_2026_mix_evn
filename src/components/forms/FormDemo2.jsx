import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("error",errors)

    const submitHandler  =(data)=>{
        alert("form successfully subbmited !!")
        console.log("data..",data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is Required*"}})}></input>
                {errors.name && errors.name.message}
                
            </div>
            <div>
                <label>AGE</label>
                <input type='number' {...register("age",{min:{value:18,message:"min age should be 18 "}})}></input>
                {errors.age && errors.age.message}
            </div>

            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
