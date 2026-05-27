import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1b = () => {
    const {register,handleSubmit} = useForm()
    //register is use for register input data...
    //handleSubmit is function it is use for to handle submit event..
    //handleSubmit -->callback --> intenrally call data

    const submitHandler = (data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1b</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("firstName")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                Male :<input type='radio' value="male" {...register("gender")}></input>
                FEMale :<input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>HOBBIES</label>
                <br></br>
                Travel <input type='checkbox' {...register("hobbies")} value="travel"></input>
                Scrolling<input type='checkbox' {...register("hobbies")} value="scrolling"></input>
                Reading <input type='checkbox' {...register("hobbies")} value="reading"></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}

