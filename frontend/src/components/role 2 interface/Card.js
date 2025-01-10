import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from '../../App';
import { Link,useNavigate } from 'react-router-dom';


const Card = () => {
  const Navigate = useNavigate()
  //----------------------------------------
  const{token,product,setUpdate} = useContext(userContext)
  let [cardElement,setCard] = useState([])
  const {loginInfo,userId,setUserId} = useContext(userContext)
  const[total,setTotal] = useState(0)

useEffect(()=>{
  const totalPrice = cardElement.reduce((acc,num,i)=>{
    console.log("acc",acc+ num.element.price * num.quantity);
    
    return acc + num.element.price *num.quantity
  },0)
  setTotal(totalPrice)


},[cardElement])
//........update.........


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


    <div className='productSection'>{
  cardElement?.map((ele,i)=>{
      console.log(ele)
      return <div className='cardProduct'>
        
        <img className='imgCard' src={ele.color}/>
        <p className='productTitle cI'>{ele.quantity} * {ele.element.price}$</p>
        <p className='productTitle'> price: {ele.quantity * ele.element.price  } $</p>

        <button className='remove' onClick={()=>{
          Navigate(`/categories/category/:name/${ele.element._id}`)
          setUpdate(true)
        }}>update</button>
        <button className='remove'  onClick={()=>{
          console.log(ele.element._id);
          deleteButton(ele.element._id)
        }} >delete from card</button>
      </div>
    })
  }</div>
  <div className='paymentSection'><p>totalPrice:{total}</p></div>

</div>
  )
}

export default Card