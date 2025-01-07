import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from '../../App';


const Card = () => {
  //----------------------------------------
  const{token,product} = useContext(userContext)
  let [cardElement,setCard] = useState([])
  const {loginInfo,userId,setUserId} = useContext(userContext)


  const deleteButton = (id)=>{
    axios.delete(`http://localhost:5000/product/card/${id}`,{headers: {
      Authorization: `Bearer ${token}`
      }})
      .then((response)=>{
        console.log(response);
        const newCard =  cardElement.filter((ele)=>{
          console.log(ele.element._id);
          
          return ele.element._id !== id
        })
        setCard(newCard)
      })
      .catch((error)=>{
        console.log(error);
      })
  }
//..........................
  useEffect(()=>{
    console.log(product,token);
    
    axios.get(`http://localhost:5000/product/card/${userId}`)
    .then((response)=>{
      console.log("rsponse",response);
      setCard(response.data.result)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  //........................................
  return (
  <div className='cardPage'>
  {
  cardElement?.map((ele,i)=>{
      console.log(ele.element,ele.quantity)
      return <div>
        <button  onClick={()=>{
          console.log(ele.element._id);
          deleteButton(ele.element._id)
        }} >delete from card</button>
      </div>
    })
  }
  <p>total</p>
</div>
  )
}

export default Card