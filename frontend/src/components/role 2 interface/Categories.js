import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
  const Navigate = useNavigate()
const [categories,setCategories]=useState([])
useEffect(()=>{

axios.get("http://localhost:5000/category")
  .then((result)=>{
    console.log(result.data.result);
    setCategories(result.data.result)
  })
  .catch((error)=>{
    console.log(error);
  })
},[])
  
  return (
    //pass _id of category as params  to category 
    //useEffect to render the products that hold this category_id (use params hooks)
    //from category if click on product pass product info to in changeable state to (category parent component) product component(child) 
    <div>
      {categories.map((element,i)=>{
        console.log(element);
        
        return <button key={i} onClick={()=>{
          console.log(element._id);
          
          Navigate(`/category/${element._id}`)

        }}><img key={i} src={element.image}/>
        <p>{element.name}</p>
        
        </button>

      })}
    </div>
  )
}

export default Categories