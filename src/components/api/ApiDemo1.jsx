import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'

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
        {
          //user -{}
          users.map((user)=>{
            return <li>{user.name} ----- {user.age}</li>
          })
        }
    </div>
  )
}
