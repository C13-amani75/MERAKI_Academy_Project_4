import React from 'react'
import { useContext,useState } from 'react'
import axios from "axios"

const Register = () => {
  const [userInfo,setUserInfo] = useState({})
  const registerFunction = ()=>{
    const {email,password,userName}= userInfo
    axios.post("http://localhost:5000/users/register",{
        email:email,
        password:password,
        username:userName
    })
    .then((result)=>{
      console.log(result);
      

    })
    .catch((error)=>{
      console.log(error);
      

    })


  }
  
  return (
    <div>
      <input onChange={(e)=>{
        setUserInfo({...userInfo,userName:e.target.value})

      }} placeholder='UserName'/><br /><br />
      <input onChange={(e)=>{
        setUserInfo({...userInfo,password:e.target.value})

      }}   placeholder='Password'/><br /><br />


      <input onChange={(e)=>{
        setUserInfo({...userInfo,email:e.target.value})

      }}  placeholder='Email'/><br /><br />

      <button onClick={()=>{
        registerFunction()
      }}>register Now</button><br /><br />
    </div>
  )
}

export default Register