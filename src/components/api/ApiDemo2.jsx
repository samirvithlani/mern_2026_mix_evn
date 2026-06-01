import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    
    const [products, setproducts] = useState([])
    
    const getProducts = async()=>{
        const res = await axios.get("https://dummyjson.com/products")
        console.log("axios objec",res)
        console.log("products",res.data.products)
        setproducts(res.data.products)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
        <button onClick={getProducts}>get products</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((pr)=>{
                        return <tr>
                            <td>{pr.id}</td>
                            <td>{pr.title}</td>
                            <td>
                                <img style={{height:100,width:100}} src={pr.thumbnail}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
