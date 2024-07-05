import React from 'react'
import  './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
    <div className="footer-content-left">
            <h3>Zwiggy</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quia cumque! Natus suscipit quasi ipsum mollitia accusamus debitis, beatae asperiores ut blanditiis? Excepturi officia impedit sapiente rem nobis,s
            it quaerat expedita libero pariatur dolor maxime commodi vel neque magnam explicabo?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Ploicy</li>
                </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <li>+91 874892048</li>
            <li>contact@Zwiggy.com</li>
        </div>
    </div>
        <hr />
        <p>Copyright &c; all right reserved</p>
    </div>
  )
}

export default Footer