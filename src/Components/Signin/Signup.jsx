import React from 'react';
import './Signin.css';
import sign from '../../assets/sign.png';
import { Link } from 'react-router-dom';


const Signup = () => {
  

  return (
    <div className="main-container">
      <div className="container">
        <div className="title">
          <h2>Sign Up</h2>
        </div>
        <div className="signin-form">
          <form method="POST" action="http://localhost/FoodDelivary/backend/SignUp.php">
            <span className="f-fata">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Enter your username" name="username" />
            </span>
            <span className="f-fata">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email" name="email" />
            </span>
            <span className="f-fata">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter your password" name="password" />
            </span>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="mooving-signup">
          <p>
            Already have an account? <Link to="/signin"><span>Sign in</span></Link>
          </p>
        </div>
      </div>
      <div className="page-imge">
        <img src={sign} alt="Signup illustration" />
      </div>
    </div>
  );
};

export default Signup;
