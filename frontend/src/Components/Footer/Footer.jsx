import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='logo'/>
            <p>Discover a world of flavors at your fingertips. Fresh meals, endless cuisines, 
                delivered hot and fast to your door!</p>
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
            <li>contact@totatogamil.com</li>
        </div>
       </div>
       <hr />
       <p className='footer-coopyright'>Copyright 2024 tomato.com All Right Reserved</p>
       
    </div>
  )
}

export default Footer