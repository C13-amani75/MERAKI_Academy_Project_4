import React from 'react'
import { useContext } from 'react'
import {userContext} from '../../App'
import axios from "axios"

const Register = () => {
  const styleMessage=()=>{
    if(isRegister){
      return {backGroundColor:"green",color:"white"}
    }
    return  {backGroundColor:"red",color:"white"}
   
  
  }
  const {setUserInfo,userInfo,setRegister,isRegister,resultMessage,setResultMessage} = useContext(userContext)
  const registerFunction = ()=>{
    const {email,password,userName}= userInfo
    axios.post("http://localhost:5000/users/register",{
        email:email,
        password:password,
        username:userName
    })
    .then((result)=>{
      if(result){
        console.log(result);
        
        setResultMessage(result.data.message)
        setRegister(true)
      }
      else{
        console.log(result);
        
        setResultMessage(result.response.data.message)
        setRegister(false)
      }
      
      //if result.data.success = true 
      
    })
    .catch((error)=>{
      console.log(error);
      
    })


  }
  //when click on register now ==>show login ==>if loged in correctly show home 
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
        console.log(userInfo);
        
        registerFunction()
      }}>register Now</button><br /><br />
      <p style={ {styleMessage}} >{resultMessage}</p>
    </div>
  )
}



export default Register