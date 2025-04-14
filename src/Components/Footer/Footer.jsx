import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
        <h1 className='logo'>PizzaMart</h1>
            <p>Our pizza shop's navbar makes ordering easy and fast. Browse the menu, customize your pizza,
               find deals, and check store info with just a click. Whether you're craving a classic or something bold,
               everything you need is right at your fingertips. Simple, smooth, and made for pizza lovers!</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="fb" />
                <img src={assets.twitter_icon} alt="tw" />
                <img src={assets.linkedin_icon} alt="lk" />
            </div>
        </div>
        <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <li>077 664 4455</li>
            <li>contact@pizzaMartgamil.com</li>
        </div>
       </div>
       <hr />
       <p className='footer-coopyright'>Copyright 2024 pizzaMart.com All Right Reserved</p>
       
    </div>
  )
}

export default Footer