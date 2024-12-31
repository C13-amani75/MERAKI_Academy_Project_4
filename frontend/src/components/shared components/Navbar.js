import React from 'react'
import {Link} from "react-router-dom"
import { FaHeart ,FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className ='navbar'>
      <div>
        <Link to="/favoriteList" ><FaHeart /></Link>
      <Link to="/card"><SlBasket /></Link>
      <Link ></Link>
      </div>
      
      <Link ><FaSearch /></Link>
      <Link ></Link>
      <Link ></Link>
    </div>
  )
}

export default Navbar