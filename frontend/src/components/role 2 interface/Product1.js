
import React, { useContext, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { FaHeart ,FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { userContext } from '../../App';
import { MdOutlineStarBorder } from "react-icons/md";
import { LuStarOff } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
//if the user complete payment process delete the remind number of product in the store 
const Product = () => {
  const{token,product,setProduct,isUpdate,setUpdate,setRateSection} = useContext(userContext)
  //use spread
  const [isFav,setIsFav]= useState(false)
  const [productPage,setProductPage] = useState({})
  const [pictures,setPictures] =useState([]) 
  const [sendMessage,setMessage] =useState("ddd")
  const {name,id} =useParams()
  const [isCompleted,setIsCompleted]=useState(false)
  const [updateCardValues,setUpdatedCard] =useState({})
  const [rate,setRate] = useState(0)
  const [isRate1,setIsRate1]=useState("") 
  const [isRate2,setIsRate2]=useState("") 
  const [isRate3,setIsRate3]=useState("") 
  const [isRate4,setIsRate4]=useState("") 
  const [isRate5,setIsRate5]=useState("") 
  const [color,setColor] = useState("white")
  
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
  useEffect(()=>{
    axios.get(`http://localhost:5000/rate//rateProduct/${id}`)
    .then((result)=>{
      setRateSection(result)
      console.log("rate",result);
      
    })
    .catch((error)=>{
      console.log(error);
    })

  },[rate])
/*  useEffect(()=>{
    if(isRate){
      setIsRate(false)
    }
      setIsRate(true)
  },[rate]) */
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
const rateFunction = ()=>{
  axios.post(`http://localhost:5000/rate/${id}`,{
    "rateValue":rate
  },{headers: {
    Authorization: `Bearer ${token}`
    }})
  .then((result)=>{
    console.log(result);
    
  })
  .catch((error)=>{
    console.log(error);
  })
}
const colorFunction =()=>{
  /*   const [isRate1,setIsRate1]=useState("") 
  const [isRate2,setIsRate2]=useState("") 
  const [isRate3,setIsRate3]=useState("") 
  const [isRate4,setIsRate4]=useState("") 
  const [isRate5,setIsRate5]=useState("")  */
  if(rate === 0){
    setIsRate1("white")
    setIsRate2("white")
    setIsRate3("white")
    setIsRate4("white")
    setIsRate5("white")
  }
  else if(rate === 1){
    setIsRate1("#8E1616")
    setIsRate2("white")
    setIsRate3("white")
    setIsRate4("white")
    setIsRate5("white")
  }
  else if(rate === 2){
    setIsRate1("#8E1616")
    setIsRate2("#8E1616")
    setIsRate3("white")
    setIsRate4("white")
    setIsRate5("white")
  }
  else if(rate === 3){
    setIsRate1("#8E1616")
    setIsRate2("#8E1616")
    setIsRate3("#8E1616")
    setIsRate4("white")
    setIsRate5("white")
  }
  else if(rate === 4){
    setIsRate1("#8E1616")
    setIsRate2("#8E1616")
    setIsRate3("#8E1616")
    setIsRate4("#8E1616")
    setIsRate5("white")
  }
  else if(rate === 5){
    setIsRate1("#8E1616")
    setIsRate2("#8E1616")
    setIsRate3("#8E1616")
    setIsRate4("#8E1616")
    setIsRate5("#8E1616")
  }


  
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
  <div>
    <p>please Rate:</p>
    <div>
      <button className='rbtn' style={{color:"white"}} key={0} onClick={()=>{
        //0
          setRate(0)
          rateFunction()
          colorFunction()
          
        }}><LuStarOff /></button>
    <button className='rbtn' style={{color:isRate1}} key={1} onClick={()=>{
      //1
          setRate(1)
          rateFunction()
          colorFunction()
        }}><MdOutlineStarBorder />
    </button>
    <button className='rbtn' style={{color:isRate2}} key={2} onClick={()=>{
      //2
          setRate(2)
          rateFunction()
          colorFunction()
        }}><MdOutlineStarBorder />
    </button>
    <button className='rbtn' style={{color:isRate3}} key={3} onClick={()=>{
      //3
          setRate(3)
          rateFunction()
          colorFunction()
        }}><MdOutlineStarBorder />
    </button>
    <button className='rbtn' style={{color:isRate4}} key={4} onClick={()=>{
      //4
          setRate(4)
          rateFunction()
          colorFunction()
        }}><MdOutlineStarBorder />
    </button>
    <button className='rbtn' style={{color:isRate5}} key={5} onClick={()=>{
      //5
          setRate(5)
          rateFunction()
          colorFunction()
        }}><MdOutlineStarBorder />
    </button>
    </div>
{/*     <div>
    <button  onClick={()=>{
      setRate(1)
      rateFunction()
  }}><MdOutlineStarBorder /></button>
    <button onClick={()=>{
      setIsRate(true)
      setRate(2)
      rateFunction()
      
  }}><MdOutlineStarBorder /></button>
    <button style={{color:color}} onClick={()=>{
      colorFunction()
      setRate(3)
      rateFunction()
      
  }}><MdOutlineStarBorder /></button>

    <button onClick={()=>{
    
      setRate(4)
      rateFunction()
      
  }}><MdOutlineStarBorder /></button>

    <button onClick={()=>{
      setRate(5)
      rateFunction()
      
  }}><MdOutlineStarBorder /></button>
    </div> */}
  
  </div>
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
