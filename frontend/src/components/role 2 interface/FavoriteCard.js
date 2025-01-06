import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { userContext } from '../../App'



const FavoriteCard = () => {
  const {loginInfo} = useContext(userContext)
  
  useEffect(()=>{
    console.log(loginInfo);
    
    axios.get("http://localhost:5000/product/favorite/:id")

  },[])
  return (
    <div>FavoriteCard</div>
  )
}

export default FavoriteCard