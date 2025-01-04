import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { FaHeart ,FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
//get category name by params 
//get product by id 
//save its infos into state
//add to card
  // useEffect on Card state will be str
  //update user card through axios update 
  // if the product already exist update quantity +1
  //update the card //if card.element exist update quantity
  //else add the element to the card 

const Product = () => {

  //use spread
  
  const [productPage,setProductPage] = useState({})
  const [pictures,setPictures] =useState([]) 
  const [isQuantity,setIsQuantity] =useState(false)
  const {name,id} =useParams()
  const [card,setCard] = useState([])
  const [product,setProduct] = useState({})
  //push product in the card and use effect on card state if updated update the card in db

/*   console.log(searchParam.get("")); */
  
  console.log(name,id);
  console.log(product);
  //..........
  useEffect(()=>{
    axios.get(`http://localhost:5000/product/${id}`)
    .then((result)=>{
      console.log("product info",result.data.result);
      setProductPage(result.data.result)
      setPictures(result.data.result.picture)
      setCard(result.data.result.card)
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])
  
  //..........
 
    //check if the quantity has value
      //if is not no updated occur ,if is it,
      //check if the product already eexist ==>update just quantity
      //else add it with its quantity 
     const buyProduct = ()=>{
      //will check in every click
       if(isQuantity){
        if(card.includes(product.element)){
          console.log(product.element);
          
        }

        //if product in the card && isQuantity
          //update just quantity
        //not add product
        
        
       }
     }

 



  return (
    
    <div className='productPage'>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <FaHeart className='heart'/>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 singleImage" src= {pictures[0]} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 singleImage" src= {pictures[1]} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 singleImage" src= {pictures[2]} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className='info'>
  <p>category:{name}</p>
  <p>{productPage.name}</p>
  <p>{[productPage.color].join(",")}</p>
  <p>{[productPage.size].join(",")}</p>
  <p>price:{productPage.price}</p>
  <p>price:{productPage.description}</p>
  <button onClick={()=>{
    setProduct({...product,element:productPage._id})
    buyProduct()

  }} className='card' >Buy</button>
  <input onChange={(e)=>{
    if(e.target.value){
      setIsQuantity(true)
      setProduct({...product,quantity:e.target.value})
    }
    
    


  }}  type='number'  max={10} min={0}/>
</div>


    </div>
  )
}
//three span or loop through color array 
  /* pic
  name
  size in p 
  color
  rate
  Details
  price
  add to fav add to card

  des
   */
export default Product