import React from 'react'
import "./App.css";
//...................components..........
import Home from './components/shared components/Home';
import Login from "./components/shared components/Login";
import Card from "./components/role 2 interface/Card";
import Register from "./components/shared components/Register";
import Notfound from "./components/shared components/Notfound";
import FavoriteCard from "./components/role 2 interface/FavoriteCard";
//...................hooks............................
import { useState } from 'react';
import { createContext } from 'react';
import {Routes,Route,Link} from "react-router-dom";
//.............icons......................
import { VscHeartFilled } from "react-icons/vsc";
import { FaHeart ,FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { BsPersonCircle } from "react-icons/bs";


  export const userContext = createContext()
const App = () => {

  const [userInfo,setUserInfo] = useState({})

  const [isRegister,setRegister] =useState(false)
  const [token,setToken] = useState(localStorage.getItem("token"))
  const [resultMessage,setResultMessage] = useState("")
  //use spread 
  //state for [card,favorite,payload information] 
  console.log(isRegister);
  
  return (
//email,pass, userName ,we send card,fav=>[] ==>send with axios to back check 
  <userContext.Provider value={{token,setToken,isRegister,setRegister,userInfo,setUserInfo,resultMessage,setResultMessage}} >
  <div className="App">
    <header>
      <ul className='headerList'>
        <li><Link className='headerIcon' to="/favoriteList" ><FaHeart /></Link></li>
        <li><Link  className='headerIcon' to="/cardList"><SlBasket /></Link></li>
      </ul>
      <h2><Link to="/">Camelia Store</Link></h2>
      <span><input></input><FaSearch /></span>
      <span>{!isRegister&&<Link className='headerIcon' to="/register" ><BsPersonCircle />create Account</Link> }<Link  to="/login" >Login</Link></span>
    </header>
    
  
    {/* build roters */}
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/favoriteList" element={<FavoriteCard/>} />
      <Route path="/cardList" element={<Card/>}/>
      <Route path="*" element={<Notfound/>}/>
      {/* path for every category  */}
    </Routes>
  
    </div>
    </userContext.Provider>
  )
}
/* routes 
Home =>navbar(home,login,register,title,favList,card,search bar),categories,otherServices,meet our worker ,aboutUs,footer"/".

login=>"/login".

register =>"/register" if register hide register ==> show login ==>hide=>login show home with username .

if logIn ==> "/login"hidden login + reg ==>showUserName
title ==> home page.

favlist ==>"/favoriteList" <favoriteList/>
card ==>"/card" <card/>.

category =>"/category/categoryname"



 */
export default App
