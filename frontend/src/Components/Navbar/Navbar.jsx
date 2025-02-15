import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
    <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>  
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
         <Link to='/ccc'> <img src={assets.basket_icon} alt="basket-icon" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {/* Use navigate to programmatically route to SignIn */}
        <button onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
