import React from 'react'
import './Signin.css'
import sign from '../../assets/sign.png'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
   <div className='main-container'>
     <div className='container'>
        <div className="title"><h2>Login</h2></div>
        <div className="signin-form">
            <form method="POST" action='http://localhost/FoodDelivary/backend/Login.php'>
           
                <span className='f-fata'>
                   <label for='email'>Email</label> 
                   <input type='email' placeholder='Enter your email'name='email'/>
                </span>
                <span className='f-fata'>
                   <label for='Password'>Password</label> 
                   <input type='password' placeholder='Enter your password'name='password'/>
                </span>
                <div className="check-box">
                    <input type='checkbox'/>
                    <p>Agree to our terms and conditions</p>
                </div>
                <button>Login</button>
            </form>
        </div>
        <div className="mooving-signup">
            <p>If you not rejistered <Link to='/signup'> <span>SignUp</span></Link> </p>
        </div>
    </div>
    <div className='page-imge'>
       <img src={sign} alt='s'/>
    </div>
   </div>
  )
}

export default Signin