import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Home from './Home'
import { useContext } from 'react'
import { userContext } from '../../App'
import Link, { Navigate } from 'react-router-dom'


const Login = () => {

  const {token,resultMessage,setResultMessage} = useContext(userContext)
  const [logInValue,setLogInValue] =useState(false)
  const [loginInfo,setLogin] = useState({})

  const logInFunction = ()=>{
    console.log(loginInfo.email,loginInfo.password);
    axios.post("http://localhost:5000/users/login",{
      email:loginInfo.email,
      password:loginInfo.password
    })
    .then((result)=>{
      setResultMessage(result.data.message)
      Navigate('/') 
      setLogInValue(true)
    })
    .catch((error)=>{
      console.log(33);
    console.log(error.response.data.message);
      setResultMessage(error.response.data.message) 
    })
  }


  //if logout =>isregister =>false

  return (
    <div>{!logInValue?<div><label htmlFor="email">email </label><input itemID="email" name="email" type="email"
      onChange={(e)=>{
        setLogin({...loginInfo,email:e.target.value})
      }} placeholder='userName'/><br/><br/>

      <label htmlFor="password">passWord </label><input type="password" itemID ='password' name="password"
      onChange={(e)=>{
        setLogin({...loginInfo,password:e.target.value})
}}  placeholder='password'/><br/><br/>
      <button onClick={()=>{
        logInFunction()
      }}>Submit</button><br/><br/>
      <p>{resultMessage}</p></div>:<></>}
      
    </div>
  )
}

export default Login