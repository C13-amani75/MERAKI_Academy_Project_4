import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from '../../App';


const FavoriteCard = () => {
  const{token} = useContext(userContext)
  let [favCard,setFavCard] = useState([])
  const {loginInfo} = useContext(userContext)
  //if delete ==>call delete function then ==>useEffect on changable value
const deleteButton = (id)=>{
  axios.delete(`http://localhost:5000/product/favorite/${id}`,{headers: {
    Authorization: `Bearer ${token}`
    }})
    .then((response)=>{
      console.log(response);
      const newFav =  favCard.filter((ele)=>{
      return ele._id !== id
      })
      setFavCard(newFav)
      
      

    })
    .catch((error)=>{
      console.log(error);
    })
}
  useEffect(()=>{
    axios.get(`http://localhost:5000/product/favorite/${loginInfo._id}`)
    .then((response)=>{
      
      setFavCard(response.data.result.favoriteList)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    //map through each id ==>call 
    <div className='favPage'>{ favCard?.map((ele,i)=>{
      console.log(ele);
      return <div onClick={()=>{
        //go to its full page
      }}>
        <img className='singleImage' src={ele?.picture[0]}/>
        <button onClick={()=>{
          console.log(ele._id);
          
          deleteButton(ele._id)
        }}>remove from Favorite</button>
      </div>

    })}</div>
  )
}
export default FavoriteCard