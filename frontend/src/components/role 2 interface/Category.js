import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Category = () => {
  
  const [categoryProduct,setCategoryProduct] = useState([])
  const {id} = useParams()


  console.log(id);
  useEffect(()=>{
    
    
    axios.get(`http://localhost:5000/product/category/${id}`)
    .then((result)=>{
      console.log(result.data);
      setCategoryProduct(result.data)
      

    })


  },[])
  
  //rendered all product the hold _id category from params 
  //take just first photo
  //when click on the product it self  and send the id of the product in params and navigate("product")
  //put the info in state every time useEffct change the value state 
  return (
    <div className='category'>
      
      {categoryProduct.map((element,i)=>{
        console.log(element);
      return  <button key={i} className='categoryElement'>
        <img src={element.picture[0]}/>
        <p>{element.name}</p>
      </button>
      })}
    </div>
  )
}

export default Category