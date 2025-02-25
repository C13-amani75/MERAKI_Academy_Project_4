
import React, { useContext, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { FaHeart ,FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { userContext } from '../../App';
//if the user complete payment process delete the remind number of product in the store 
const Product = () => {
  const{token,product,setProduct,isUpdate,setUpdate} = useContext(userContext)
  //use spread
  const [isFav,setIsFav]= useState(false)
  const [productPage,setProductPage] = useState({})
  const [pictures,setPictures] =useState([]) 
  const [sendMessage,setMessage] =useState("ddd")
  const {name,id} =useParams()
  const [isCompleted,setIsCompleted]=useState(false)
  const [updateCardValues,setUpdatedCard] =useState({})
  
/*   console.log(searchParam.get("")); */
/* {headers: {
            Authorization: `Bearer ${token}`
            }} */
  console.log(name,id);
  console.log(product);
  //..........
  useEffect(()=>{
    axios.get(`http://localhost:5000/product/${id}`)
    .then((result)=>{
      setProductPage(result.data.result)
      setPictures(result.data.result.picture)
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])
const updateCardElement = ()=>{
  //compare btw two values 
  axios.put(`http://localhost:5000/product/card/update/${id}`,{
    "size":updateCardValues.size,
    "color":updateCardValues.color,
    "quantity":updateCardValues.quantity

  },{headers: {
    Authorization: `Bearer ${token}`
    }})
    .then((result)=>{
      setUpdate(false)
      console.log(result);

    })
    .catch((error)=>{
      console.log(error);
    })
}

  //..............addToFavorite.................
  const favoriteFunction =()=>{
    axios.post(`http://localhost:5000/product/favorite/${id}`,{
      "quantity":product.quantity
    },{headers: {
      Authorization: `Bearer ${token}`
      }})
    .then((response)=>{
      console.log("buy",response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const updateCard =()=>{
    console.log(product.quantity);
    
    axios.put(`http://localhost:5000/product/card/${id}`,{
      "quantity":product.quantity,
      "color":product.color,
      "size":product.size
      
    },{headers: {
      Authorization: `Bearer ${token}`
      }})
    .then((response)=>{
      console.log("buy",response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className='productPage'>
      <div id="carouselExampleControls" class="carousel slide productImages" data-ride="carousel">
        <span onClick={
          ()=>{
            if(!isFav){
                favoriteFunction()
                setIsFav(true)
            }
            setIsFav(false)
          }
        }><FaHeart className='heart'/></span>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100  pic" src= {pictures[0]} alt="First slide"/>
    </div>
    {pictures.map((ele,i)=>{
      return <div class="carousel-item ">
      <img class="d-block w-100 pic" src= {ele} alt="Second slide"/>
    </div>
    })}
    <div class="carousel-item ">
      <img class="d-block w-100 pic" src= {pictures[1]} alt="Second slide"/>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100 pic" src= {pictures[2]} alt="Third slide"/>
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
  <p className="catName productTitle"> category: {name}</p>
  <p className='productTitle'>Code: {productPage.name}</p>
  {/* <p>{[productPage.color].join(",")}</p> */}
  <p className='productTitle'>sizes: {productPage.size?.map((ele)=>{
    return <div>
      <input  id={ele} value={ele} name="size" type="radio" onClick={(e)=>{
        console.log(e.target.value);
        if(!isUpdate){
          setProduct({...product,size:e.target.value})
        }
        else{
          setUpdatedCard({...updateCardValues,size:e.target.value})
       
        }
      

    }}/>
    <label for={ele}>{ele}</label></div>
  })}</p>
  <div className='colors'>
    {productPage.color?.map((ele)=>{
      console.log(ele);
      
      return <button><img onClick={()=>{
       /*  setProduct({...product,color:ele}) */
      if(!isUpdate){
        setProduct({...product,color:ele})
      }
      else{
        setUpdatedCard({...updateCardValues,color:ele})
      
      }
        
    
      }} className='colorImage' src={ele}/></button>

    })}
  </div>

  <p className='price'>price: {productPage.price}$</p>

  <p ><span className='price'>Details:</span>{productPage.description}</p>

  <div className='productButton'>
    {!isUpdate?<button onClick={()=>{
    setProduct({...product,element:productPage._id})
    if(product.quantity > 0 && product.color && product.size){
      updateCard()
      console.log(product);
      setMessage("all your chooses saved correctly")
      setIsCompleted(true)
    }
    else{
      setMessage("you are almost missed one of these color, size, number of pieces")
    }
  }} className=' button1' >Buy</button>:<button
  onClick={()=>{
    updateCardElement()
  }}
  >update</button>}
  <label className='productTitle'> pieces:</label><input onChange={(e)=>{
    if(!isUpdate){
      setProduct({...product,quantity:e.target.value})
    }
    else{
      setUpdatedCard({...updateCardValues,quantity:e.target.value})
    }
  }}  type='number'  max={10} min={0}/>
  
  
  
</div>
<p>{sendMessage}</p>
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
