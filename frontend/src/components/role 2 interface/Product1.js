import React, { useEffect, useState } from 'react'
import useSearchParams from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//get category name by params 
//get product by id 
//save its infos into state


const Product = () => {
  const [productPage,setProductPage] = useState({})
  const {name,id} =useParams()
  console.log(name,id);
  useEffect(()=>{
    axios.get(`http://localhost:5000/product/${id}`)
    .then((result)=>{
      console.log(result);
      setProductPage(result.data.result)
     
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])
  



  return (
    
    <div>
      {productPage.description}
    </div>
  )
}

export default Product