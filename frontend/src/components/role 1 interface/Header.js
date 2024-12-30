//card -favorite -login -registering -category/&single category-
import React from 'react'
import {Link} from "react-router-dom"
import { VscHeartFilled } from "react-icons/vsc";



const Header = () => {
    //<Link> ==>3 login register ,fav,card toggle btw login,logout
return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link></Link>
        <Link to="favorite"><VscHeartFilled /></Link>
    </div>
)
}
export default Header