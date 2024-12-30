import React from 'react'
import "./App.css";
import Header from './components/role 1 interface/Header';
import Main from './components/role 1 interface/Main';
import Footer from './components/role 1 interface/Footer';
import { useState } from 'react';
import { createContext } from 'react';
import {Routes,Route} from "react-router-dom";
import Register from "./components/shared components/Register"
import Login from "./components/shared components/Login"
import Category from "./components/role 2 interface/Category"
import FavoriteCard from "./components/role 2 interface/FavoriteCard"


const userContext= createContext()
const App = () => {
  const [token,setToken] = useState(localStorage.getItem("token"))
  //use spread 
  //state for [card,favorite,payload information] 
  return (
//email,pass, userName ,we send card,fav=>[] ==>send with axios to back check 
  <userContext.Provider value={{}}>
  <div className="App">
    <Header/>
    <Main/>
    
    <Footer/>
    
    {/* build routers */}
    <Routes>
      <Route path="/category" element={<Category/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="favorite" element={<FavoriteCard/>}></Route>
      {/* path for every category  */}

    </Routes>
    </div>
    </userContext.Provider>
  )
}

export default App
