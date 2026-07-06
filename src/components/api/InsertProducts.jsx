import axios from 'axios'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { data } from 'react-router-dom'
import { toast } from 'react-toastify'

// {
//       "name": "tshirt",
//       "price": 5432,
//       "description": "xdfgchjk",
//       "colors": [
//         "Green"
//       ],
//       "size": "m",
//       "isAvailable": true,
//       "unit": 2
// },

export const InsertProducts = () => {


    const{register,handleSubmit,control}=useForm({defaultValues:{"products":[{name:"",price:0,description:"",colors:[],unit:0,size:"",isAvailable:true}]}})
    const {fields,append,remove}=useFieldArray({name:"products",control})

    const submitHandler =async(data)=>{
        console.log(data)
        //data[index].colors -->string -->array

        var updatedData = data.products.map((pr)=>{
            return {...pr,colors:pr.colors.split(","),isAvailable:pr.isAvailable=="true"?true:false}
        })

        console.log(updatedData)
        const res = await axios.post(`https://node5.onrender.com/product/addproducts`,updatedData)
        console.log("res.data",res)
        if(res.status==201){
            toast.success("products added !!!")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
         <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((elm,index)=>{
                    return <div>
                        <div>
                            <label>NAME</label>
                            <input type='text' {...register(`products.${index}.name`)}></input>
                        </div>
                        <div>
                            <label>PRICE</label>
                            <input type='text' {...register(`products.${index}.price`)}></input>
                        </div>
                        <div>
                            <label>UNITS</label>
                            <input type='text' {...register(`products.${index}.unit`)}></input>
                        </div>
                        <div>
                            <label>DESC</label>
                            <input type='text' {...register(`products.${index}.description`)}></input>
                        </div>
                        <div>
                            <label>SIZE</label>
                            <input type='text' {...register(`products.${index}.size`)}></input>
                        </div>
                        <div>
                            <label>COLORS</label>
                            <input type='text' {...register(`products.${index}.colors`)}></input>
                        </div>
                        <div>
                            <label>status</label>
                            <input type='text' {...register(`products.${index}.isAvailable`)}></input>
                        </div>
                    </div>
                })
            }
            <div>
                <input type='submit'></input>
            </div>
             <div>
            
         </div>
         </form>
        <button onClick={()=>{append({name:"",price:0,description:"",colors:[],unit:0,size:"",isAvailable:true})}}>ADD</button>
    </div>
  )
}
