import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { RiDeleteBin5Line } from "react-icons/ri";
import { userContext } from '../../App';
import { Link,useNavigate } from 'react-router-dom';
import { PaymentElement } from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


 const stripePromise = loadStripe('pk_test_51Qf56tGwWXeXknZRfCRaT2DoYiBm50zk3Wfuc8vp0H8gUJ47p5tV1oCP1spF8IrHUQhP5jO9QyeXH1UPrHFLkOTG00pnwkYRH7'); 
const Card = () => {
  const Navigate = useNavigate()
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  
  //---------------------------
  const{token,product,setUpdate} = useContext(userContext)
  let [cardElement,setCard] = useState([])
  const {loginInfo,userId,setUserId} = useContext(userContext)
  const[total,setTotal] = useState(0)

  //.......................................................................
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
      console.log("response",response);
      setCard(response.data.result)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  useEffect(() => {
    fetch("http://localhost:5000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);
  //........................................
  return (
  <div className='cardPage'>
    <div className='productSection'>{
  cardElement?.map((ele,i)=>{
      console.log(ele)
      return <div className='cardProduct'>
        <div className='we1'>
        <img className='imgCard' src={ele.color}/>
        <div className='cbad'>
          <span>
          <p className='cts'>size: {ele.size}</p>
          <p ><span className='cts'>details:</span> {ele.element.description}</p>
          </span>
          <div className='btn'>
        <button className='cbtn button1' onClick={()=>{
          Navigate(`/categories/category/:name/${ele.element._id}`)
          setUpdate(true)
        }}>update</button>
        <button className='cbtn button1'  onClick={()=>{
          
          deleteButton(ele.element._id)
        }} ><RiDeleteBin5Line /></button>
        </div>
      </div>
        </div>
<div className='we2'>
<p className='productTitle cI'>{ele.quantity} * {ele.element.price}$</p>
<p className='productTitle'> price: {ele.quantity * ele.element.price  } $</p>
        </div>
      </div>
    })
  }</div>
  <div className='paymentSection'>
  <h1 className='total'>
      <span>total price</span>
      <span>{total} $</span>
      </h1>
  {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div> 
</div>
  )
}

export default Card