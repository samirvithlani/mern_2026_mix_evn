import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()

    const validationSchema = {

        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            },
            minLength:{
                value:3,
                message:"min len 3"
            },
            maxLength:{
                value:10,
                message:"max len 10"
            }
        },
        ageValidator:{
            //
        }

    }

    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
