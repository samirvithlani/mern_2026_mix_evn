import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { toast } from 'react-toastify'

export const ApiDemo1 = () => {

  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])
  const [isLoading, setisLoading] = useState(false)

  //create udf function
  const getUsers =async()=>{
    
    setisLoading(true)
    //Promise<AxiosResponse<any, any, {}>>
    //then catch,async await
    const res = await axios.get("https://node5.onrender.com/user/user/")
    console.log("res..axios object..",res)
    //api response res.data
    console.log("api response...",res.data)
    console.log("message variable..",res.data.message)//""
    console.log("data..",res.data.data) //[]
    setmessage(res.data.message)
    setusers(res.data.data)
    //loder stop
    setisLoading(false)

  }

  useEffect(()=>{
    getUsers()
  },[])

  const deleteUser = async(id)=>{
    //alert(id)
    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    console.log(res) // axios object
    //status
    if(res.status==204){
      //alert("user deleted..")
      toast.success("user deleted !")
      getUsers() //agian it will call get api --> updated records
    }
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <h3>GET API</h3>
        <h1>{message}</h1>
        {/* {
          isLoading &&  <h1>Loading...</h1>
        } */}
        
        {
          isLoading && <Loader/>
        }
        
        {/* <button onClick={getUsers}>GET</button> */}
       <table className='table table-dark'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>STATUS</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user)=>{
                  return<tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.isActive?"active":"NOt active"}</td>
                    <td>
                      <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
       </table>
    </div>
  )
}
