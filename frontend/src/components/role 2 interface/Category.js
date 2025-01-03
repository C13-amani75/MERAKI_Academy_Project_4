import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Category = () => {
  const [categoryProduct,setCategoryProduct] = useState([])
  const {id} =useParams()
  console.log(id);
  useEffect(()=>{
    axios.get(`http://localhost:5000/product/category/${id}`)
    .then((result)=>{
      console.log(result.data);
      setCategoryProduct(result.data)
      

    })


  },[])
  
  //rendered all product the hold _id category from params 
  //put the info in state every time useEffct change the value state 
  return (
    <div>
      
      {categoryProduct.map((element,i)=>{
        console.log(element.picture);
       return  <button><div>
        {element.picture.map((ele)=>{
          console.log(ele);
          
          <p>{ele}</p>
          


        })}
        </div></button>
      })}
    </div>
  )
}

export default Category