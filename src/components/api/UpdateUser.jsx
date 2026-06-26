import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { data, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export const UpdateUser = () => {
  const id = useParams().id;
  const navigate = useNavigate()
  //const{register,handleSubmit}=useForm({defaultValues:{name:"test",age:0,email:"janhsiojsb"}})
  const{register,handleSubmit}=useForm({defaultValues:async()=>{
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`) //getuser by id-->
    console.log("data...",res.data.data)
    // return {
    //   name:res.data.data.name,
    //   age:res.data.data.age,
    //   email:res.data.data.email
    //   //25..
    // }
    return res.data.data //{whole object}
  }})
  const submitHanlder =async(data)=>{
    console.log("data...",data) //data == updatedObject
    //update api..
    //api is not expecting _id in object
    //remove _id from data var
    delete data._id;
    const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
    console.log(res)
    if(res.status==200){
      toast.success("user updated...")
      navigate("/apidemo1")
      //navigation go to apidemo1 check your url in app.jsx
    }
    
  }
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>EDIT AND UPDATE</h1>
        <form onSubmit={handleSubmit(submitHanlder)}>
            <div>
              <label>NAME</label>
              <input type='text' {...register("name")}></input>
            </div>
            <div>
              <label>EMAIL</label>
              <input type='text' {...register("email")}></input>
            </div>
            <div>
              <label>AGE</label>
              <input type='text' {...register("age")}></input>
            </div>
            
            <div>
              <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
