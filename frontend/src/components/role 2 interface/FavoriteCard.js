import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from '../../App'



const FavoriteCard = () => {
  const [favCard,setFavCard]=useState([])
  const {loginInfo} = useContext(userContext)
  
  useEffect(()=>{
    console.log(loginInfo);
    
    axios.get(`http://localhost:5000/product/favorite/${loginInfo._id}`)
    .then((response)=>{
      console.log(response.data.result); 
      setFavCard(response.data.result)
    })
   
    .catch((error)=>{
      console.log(error);
      

    })

  },[])

  return (
    <div>{favCard.map((element,i)=>{
     return  <p>{element}</p>

    })}</div>
  )
}

export default FavoriteCard