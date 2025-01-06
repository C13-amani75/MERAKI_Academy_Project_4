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
import Categories from './components/role 2 interface/Categories';
import Category from './components/role 2 interface/Category';
import Product1 from './components/role 2 interface/Product1';
//........


  export const userContext = createContext()
const App = () => {
  const [loginInfo,setLogin] = useState({})
const [isLogin,setIsLogIn] =useState(false)
  const [isRegister,setRegister] =useState(false)
  const [token,setToken] = useState(localStorage.getItem("token"))
  const [resultMessage,setResultMessage] = useState("")
  //use spread 
  //state for [card,favorite,payload information] 
  console.log(isRegister);
  console.log(loginInfo);
  const [image, setImage ] = useState("");//hold image to uploaded 
  console.log(image);
  
const [ url, setUrl ] = useState("");//url image after uploaded 
const uploadImage = () => { //
const data = new FormData()// create key value pairs for data to send to the server
data.append("file", image) //we append on formData we append image to data 
data.append("upload_preset", "ecommerce")
data.append("cloud_name","drhlmb3qr")
fetch("  https://api.cloudinary.com/v1_1/drhlmb3qr/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json()) //convert response to json 
.then(data => {
setUrl(data.url) //set data to url by using setUrl
})
.catch(err => console.log(err))
}
  return (
//email,pass, userName ,we send card,fav=>[] ==>send with axios to back check 
  <userContext.Provider value={{setIsLogIn,loginInfo,setLogin,token,setToken,isRegister,setRegister,resultMessage,setResultMessage}} >
  <div className="App">
    <header>
      <ul className='headerList'>
        <li ><Link  className='headerIcon' to="/favoriteList" ><FaHeart /></Link></li>
        <li><Link  className='headerIcon' to="/cardList"><SlBasket /></Link></li>
      </ul>
      <h2><Link className='link' to="/">Camelia Store</Link></h2>
      <span className='searchInput'><input className='search' ></input><FaSearch className='searchSign' /></span>
      <span className='registerSection'>{!isRegister&&<Link className='link register' to="/register" > <BsPersonCircle />sign Up</Link> }
      {!isLogin?<Link className='link register'  to="/login" >|Login</Link>:loginInfo.userName}</span>
    </header>

   <div>
<input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
<button onClick={uploadImage}>Upload</button>
</div>
<div>
<img src={url}/>
</div> 
    
  
    {/* build roters */}
    <Routes>
      
            
        
      <Route path="/" element={<Home/>} /> {/* have routes of category,footer */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/favoriteList" element={<FavoriteCard/>} />
      <Route path="/cardList" element={<Card/>}/>
      
   <Route path='/categories' element={<Categories/>}/>
      <Route path='/category/:id/categoryName' element={<Category/>}/>
      <Route path='/categories/category/:name/:id' element={<Product1/>}/> 
      <Route path="*" element={<Notfound/>}/>
      {/* path for every category  */}
    </Routes>
    
    </div>
    
    </userContext.Provider>
  )
}
//categories =>category =>single product
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
