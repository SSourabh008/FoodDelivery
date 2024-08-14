import React, { useContext, useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets.js'
import {Link, useNavigate} from "react-router-dom"
import { StoreContext } from '../../context/StoreContext.jsx';
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token")
        setToken("");
        navigate("/");
    }
  return (
    <>
        <div className="navbar">
            <Link to="/"><h1>Zwiggy</h1></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</a>
                <a  href='#' onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>Contact-Us</a>
                <a href='#footer' onClick={()=>{setMenu("about")}} className={menu==="about"?"active":""}>About-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    {getTotalCartAmount()!==0 && <div className="dot"></div>}
                </div>
                {!token?<button onClick={()=>{setShowLogin(true)}}>Sign-In</button>
                    :
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='navbar-profile-dropdown'>
                            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                }
                
            </div>
        </div>
    </>
  )
}

export default Navbar