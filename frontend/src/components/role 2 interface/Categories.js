import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
  const Navigate = useNavigate()
const [categories,setCategories]=useState([])
useEffect(()=>{

axios.get("http://localhost:5000/category")
  .then((result)=>{
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
    <div className='categoriesPage'>
      
      {categories.map((element,i)=>{
        return <button className='categoryElement' key={i} onClick={()=>{
          console.log(element.name);
          
          Navigate(`/category/${element._id}/categoryName?name=${element.name}`)

        }}><img className='categoryImage' key={i} src={element.image}/>
        <p>{element.name}</p>
        
        </button>

      })}
    </div>
  )
}
//----------Done---------------------------

export default Categories