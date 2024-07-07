import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const[currStatus,setCurrStatus]=useState("Sign Up");
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currStatus}</h2>
                <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-input'>
                { currStatus!=="Login" && <input type="text" placeholder='Name' required />}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currStatus==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id=""  required/>
                <p>I Agree</p>
            </div>
            {
                currStatus==="Sign Up"?
                <p>Have  an Account? <span onClick={()=>{setCurrStatus("Login")}}>Click here</span></p>:
                <p>Create an Account? <span onClick={()=>{setCurrStatus("Sign Up")}} >Click here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LoginPopup