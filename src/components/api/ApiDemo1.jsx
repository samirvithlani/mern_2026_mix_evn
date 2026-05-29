import axios from 'axios'
import React from 'react'

export const ApiDemo1 = () => {

  //create udf function
  const getUsers =async()=>{
    
    //Promise<AxiosResponse<any, any, {}>>
    //then catch,async await
    const res = await axios.get("https://node5.onrender.com/user/user/")
    console.log("res..axios object..",res)
    //api response res.data
    console.log("api response...",res.data)
    console.log("message variable..",res.data.message)
    console.log("data..",res.data.data)

  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <h3>GET API</h3>
        <button onClick={getUsers}>GET</button>
    </div>
  )
}
