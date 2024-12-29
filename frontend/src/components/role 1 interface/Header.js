//card -favorite -login -registering -category/&single category-
import React from 'react'
import {Link} from "react-router-dom"


<script src="https://kit.fontawesome.com/eba53de68e.js" crossorigin="anonymous"></script>

const Header = () => {
    //<Link> ==>3 login register ,fav,card toggle btw login,logout
return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link>basket</Link>
        <Link to="favorite">favorite Card</Link>
    </div>

)
}

export default Header