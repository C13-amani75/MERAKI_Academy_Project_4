import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Categories = () => {
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
    <div>
      {categories.map((element,i)=>{
        return <img key={i} src={element.image}/>

      })}
    </div>
  )
}

export default Categories