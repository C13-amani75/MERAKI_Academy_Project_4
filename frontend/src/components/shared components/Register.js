import React from 'react'
import { useContext } from 'react'
import {userContext} from '../../App'
import axios from "axios"
import Login from './Login'

const Register = () => { //Done
 /*  const styleMessage=()=>{
    if(isRegister){
      return {backGroundColor:"green",color:"white"}
    }
    return  {backGroundColor:"red",color:"white"}
  } */
  const {setUserInfo,userInfo,setRegister,isRegister,resultMessage,setResultMessage} = useContext(userContext)
  const registerFunction = ()=>{
    const {email,password,userName} = userInfo
    //check user info before send
    
    axios.post("http://localhost:5000/users/register",{
      username:userName,
        email:email,
        password:password,

    })
    .then((result)=>{
      setRegister(true)
      console.log(result);

    })
    .catch((error)=>{
      setRegister(false)
      console.log(error);
      
    })


  }
  //when click on register now ==>show login ==>if loged in correctly show home 
  return (
    <div className='registerPage'>
    {
    !isRegister&&<div>
      <input type="text" required onChange={(e)=>{
          console.log("e",e.target.value)
            setUserInfo({...userInfo,userName:e.target.value})
        
      }} placeholder='UserName'/><br /><br />
      <input type="password" required onChange={(e)=>{
        setUserInfo({...userInfo,password:e.target.value})
      }}   placeholder='Password'/><br /><br />
      <input type='email' required onChange={(e)=>{
        setUserInfo({...userInfo,email:e.target.value})
      }}  placeholder='Email'/><br /><br />
      <button onClick={()=>{
        console.log(userInfo);
        registerFunction()
        setUserInfo("")
      }}>register Now</button><br /><br />
      <p>{resultMessage}</p>
      {setResultMessage("")}
    </div>
    
    }
    {isRegister&& <Login/>}
    </div>
  )
}



export default Register