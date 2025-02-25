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
import Completion from './components/role 2 interface/Completion';
//........


  export const userContext = createContext()
  // Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const App = () => {

const [rateSection,setRateSection] = useState({})
    const [isUpdate,setUpdate] =useState(false)
  const [product,setProduct] = useState({})
  const [userId,setUserId] = useState(localStorage.getItem("userId"))
  const [loginInfo,setLogin] = useState(localStorage.getItem("userInfo"))
const [isLogin,setIsLogIn] =useState(false)
  const [isRegister,setRegister] =useState(false)
  const [token,setToken] = useState(localStorage.getItem("token"))
  const [resultMessage,setResultMessage] = useState("")
  
  
  //use spread 
  //state for [card,favorite,payload information] 

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
   /*  <Elements stripe={stripePromise} options={options}> */

  <userContext.Provider value={{rateSection,setRateSection,isUpdate,setUpdate,product,setProduct,userId,setUserId,setIsLogIn,loginInfo,setLogin,token,setToken,isRegister,setRegister,resultMessage,setResultMessage}} >
  <div className="App">
    <header>
    <h1><Link className='link ' to="/"><span className='ht'>Camellia</span> Store</Link></h1>
      <span className='searchInput'><input className='search' ></input><FaSearch className='searchSign' /></span>
      <ul className='headerList'>
        <li ><Link  className='headerIcon' to="/favoriteList" ><FaHeart /></Link></li>
        <li><Link  className='headerIcon' to="/cardList"><SlBasket /></Link></li>
      </ul>
      <span className='registerSection'>
        {!isRegister&& !token ?<Link className='link register' to="/register" >signUp </Link>:""}
      {!token?<Link className='link register'  to="/login" >|Login</Link>:<span className='name'><span className='log'>{loginInfo}</span><Link className='out'>logout</Link></span>}</span>
    </header>

  <div>
{/* <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
<button onClick={uploadImage}>Upload</button> */}
</div>
<div>
<img src={url}/>
</div> 
    
  
    {/* build roters */}
    <Routes>
      
            
        <Route path="/completion" element={<Completion/>} />
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
   /*  </Elements> */
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