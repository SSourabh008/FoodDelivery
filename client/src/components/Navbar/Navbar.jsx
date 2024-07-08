import React, { useContext, useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets.js'
import {Link} from "react-router-dom"
import { StoreContext } from '../../context/StoreContext.jsx';
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext);
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
                <button onClick={()=>{setShowLogin(true)}}>Sign-In</button>
            </div>
        </div>
    </>
  )
}

export default Navbar