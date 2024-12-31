import React from 'react'
import "./App.css";
import Home from './components/shared components/Home';
import { useState } from 'react';
import { createContext } from 'react';
import {Routes,Route,Link} from "react-router-dom";
import Register from "./components/shared components/Register"
import Login from "./components/shared components/Login"
import Category from "./components/role 2 interface/Category"
import FavoriteCard from "./components/role 2 interface/FavoriteCard"
import Card from "./components/role 2 interface/Card"
import { VscHeartFilled } from "react-icons/vsc";

const userContext= createContext()
const App = () => {
  const [token,setToken] = useState(localStorage.getItem("token"))
  //use spread 
  //state for [card,favorite,payload information] 
  return (
//email,pass, userName ,we send card,fav=>[] ==>send with axios to back check 
  <userContext.Provider >
  <div className="App">

    {/* build routers */}
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/favoriteList" element={<FavoriteCard/>}></Route>
      <Route path="/cardList" element={<Card/>}></Route>
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
