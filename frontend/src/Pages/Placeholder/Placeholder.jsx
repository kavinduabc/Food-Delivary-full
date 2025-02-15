import React, { useContext } from 'react'
import './Placeholder.css'
import { StoreContext } from '../../Context/StoreContext'

const Placeholder = () => {

   const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
       <p className="title">Delivery Information</p>
       <div className="multi-filds">
        <input type="text" Placeholder="First name"></input>
        <input type="text" Placeholder="lase name"></input>
       </div>
       <input type="email" placeholder='Email address'/>
       <input type='text' placeholder='Street'/>
       <div className="multi-filds">
        <input type="text" Placeholder="City"></input>
        <input type="text" Placeholder="State"></input>
       </div>
       
       <input type='text' placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h>Cart Total</h>
            <div>
               <div className="cart-total-details">
                <p>Subtotsl</p>
                <p>${getTotalCartAmount()}</p>
               </div>
               <hr />
               <div className="cart-total-details">
                <p>Delivary Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
               </div>
               <hr />
               <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
               </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeholder