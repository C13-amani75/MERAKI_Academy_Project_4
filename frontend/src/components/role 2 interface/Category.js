import React, { useEffect, useState } from 'react'
import { useParams ,useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Category = () => {
  const Navigate = useNavigate()
  const [searchParam] = useSearchParams()
  const categoryName = searchParam.get("name")
  
  
  const [categoryProduct,setCategoryProduct] = useState([])
  const {id} = useParams()


  console.log(id);
  useEffect(()=>{
    
    axios.get(`http://localhost:5000/product/category/${id}`)
    .then((result)=>{
      console.log("product of specific category",result.data);
      setCategoryProduct(result.data)
      

    })
    .catch((error)=>{
      console.log(error);
      

    })


  },[])
  
  //rendered all product the hold _id category from params 
  //take just first photo
  //when click on the product it self  and send the id of the product in params and navigate("product")
  //put the info in state every time useEffct change the value state 
  return (
    <div className='category'>
      
      
      {categoryProduct.map((element,i)=>{
      return<button className='product' onClick={()=>{
        Navigate(`/categories/category/${categoryName}/${element._id}`)
      }} key={i} >
        <span></span>
        <img className='singleImage' src={element.picture[0]}/>
        <p className='productCode'>{element.name}</p>
        <p className='productTitle'>Prettylittlething</p>
        <p className='productDescription'>Beige Halter Neck Column Midaxi <br/>Shift Dress</p>
        <p className='price'>Price:{element.price} JOD</p>
      </button>
      })}
    
    </div>
  )
}

export default Category