import React from 'react'
import useSearchParams from 'react-router-dom'
import { useParams } from 'react-router-dom'
//get category name by params 
//get product by id 
//save its infos into state

const Product = () => {
  const {name,id} =useParams()
  console.log(name,id);
  



  return (
    <div>product</div>
  )
}

export default Product