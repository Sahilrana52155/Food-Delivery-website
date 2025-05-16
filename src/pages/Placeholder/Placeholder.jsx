import React, { useContext } from 'react'
import './Placeholder.css'
import { Form } from 'react-router-dom'
import { StoreContext } from '../../context/storecontext'
const Placeholder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
 <form className='place-holder'>
  <div className="place-holder-left">
    <p className='title'>Delivery information</p>
    <div className="multi-fields">
      <input type="text" placeholder='First_name'/>
      <input type="text" placeholder='Last_name'/>
    </div>
    <input type="email" placeholder='Email_Address'/>
    <input type="text" placeholder='street'/>
    <div className="multi-fields">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>
    <div className="multi-fields">
      <input type="text" placeholder='Zip-Code'/>
      <input type="text" placeholder='Country'/>
    </div>
    <input type="text" placeholder='Phone-Number' />
    
  </div>
  <div className="place-holder-right">
  <div className="cart-total">
            <h2> Cart Total</h2>
            <div>
            <div className="cart-total-details">
                <p> Sub total</p>
                <p> ${getTotalCartAmount()}</p>


              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>

              </div>
              <hr/>
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
