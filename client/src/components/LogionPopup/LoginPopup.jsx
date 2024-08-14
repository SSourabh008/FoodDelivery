import React, { useState,useEffect, useContext } from 'react'
import "./LoginPopup.css"
import axios from "axios";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const LoginPopup = ({setShowLogin}) => {
    const[currStatus,setCurrStatus]=useState("Sign Up");
    const {url,setToken}=useContext(StoreContext);
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    });
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }
    const onLogin=async(event)=>{
        event.preventDefault();
        let newUrl=url;
        if(currStatus==="Login"){
            newUrl+="/api/user/login";
        }else{
            newUrl+="/api/user/register";
        }
        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }else{
            alert(response.data.message);
        }
    }
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currStatus}</h2>
                <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-input'>
                { currStatus!=="Login" && <input name='name' type="text" placeholder='Name' onChange={onChangeHandler} value={data.name}required />}
                <input type="email" onChange={onChangeHandler} name='email' placeholder='Email' value={data.email} required />
                <input type="password" onChange={onChangeHandler} name='password'value={data.password} placeholder='Password' required />
            </div>
            <button type='submit'>{currStatus==="Sign Up"?"Create Account":"Login"}</button>
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