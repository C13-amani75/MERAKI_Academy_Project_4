import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Home from './Home'
import { useContext } from 'react'
import { userContext } from '../../App'
import Link, { useNavigate } from 'react-router-dom'


const Login = () => {
  const Navigate = useNavigate()
  const {token,setToken,resultMessage,setResultMessage,loginInfo,setLogin,setIsLogIn,userId,setUserId} = useContext(userContext)
  const logInFunction = ()=>{
    console.log(loginInfo.email,loginInfo.password);
    axios.post("http://localhost:5000/users/login",{
      email:loginInfo.email,
      password:loginInfo.password
    })
    .then((result)=>{
      console.log(result.data.token,"id");
      localStorage.setItem("token",result.data.token)
      localStorage.setItem("userId",result.data.user._id)
      console.log(result.data.user.username);
      localStorage.setItem("userInfo",result.data.user.username) 
      setLogin(result.data.user.userName)
      console.log(result.data.user._id);
      
      setIsLogIn(true)
      setResultMessage(result.data.message)
      Navigate('/') 
      console.log(token,"tt");

    })
    .catch((error)=>{
      console.log(33);
      console.log(error);
    console.log(error.response.data.message);
      setResultMessage(error.response.data.message) 
    })
  }


  //if logout =>isregister =>false

  return (
    <div className='loginPage'>
      <div>
        <label htmlFor="email">Email:  </label><input itemID="email" name="email" type="email"
      onChange={(e)=>{
        setLogin({...loginInfo,email:e.target.value})
      }} placeholder='Email'/><br/><br/>

      <label htmlFor="password">PassWord: </label><input type="password" itemID ='password' name="password"
      onChange={(e)=>{
        setLogin({...loginInfo,password:e.target.value})
}}  placeholder='password'/><br/><br/>
      <button className='button1' onClick={()=>{
        logInFunction()
      
        
      }}>Submit</button><br/><br/>
      <p>{resultMessage}</p></div>
    </div>
  )
}

export default Login