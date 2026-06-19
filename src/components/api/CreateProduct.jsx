import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const CreateProduct = () => {
    const {register,handleSubmit}=useForm()
    
    const submitHanlder = async(data)=>{
        data.price = parseInt(data.price)
        data.colors =data.colors.split(",")
        data.isAvailable = data.isAvailable == "true"?true:false
        data.unit = parseInt(data.unit)
        console.log(data)

        const res = await axios.post("https://node5.onrender.com/product/create",data)
        console.log(res)//axios object..
        if(res.status==201){
            //alert("data added !!")
            toast.success("product added..")
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>CreateProduct</h1>
        <form onSubmit={handleSubmit(submitHanlder)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name")}></input>
                </div>
                <div>
                    <label>PRICE</label>
                    <input type='text' {...register("price")}></input>
                </div>
                <div>
                    <label>DESC</label>
                    <input type='text' {...register("description")}></input>
                </div>
                <div>
                    <label>COLORS</label>
                    <input type='text' placeholder='add comma sep colors eg red,green' {...register("colors")}></input>
                </div>
                <div>
                    <label>SIZE</label>
                    <select {...register("size")}>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div>
                    <label>STATUS</label>
                    <br></br>
                    AVAILABLE <input type='radio' {...register("isAvailable")} value="true"></input>
                    NOT AVAILABLE <input type='radio' {...register("isAvailable")} value="false"></input>
                </div>
                <div>
                    <label>UNIT</label>
                    <input type='text' {...register("unit")}></input>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
        </form>
    </div>
    
  )
}
