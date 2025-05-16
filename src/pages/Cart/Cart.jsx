import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storecontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { carditems, food_list, removeFromCart ,getTotalCartAmount} = useContext(StoreContext)
  const navigate=useNavigate();

  return (
    <div>

      <div className="cart">
        <div className="cart-item">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          <hr />
          <br />
          {food_list.map((item, index) => {
            if (carditems[item._id] > 0) {
              return (
                <div>
                  <div className='cart-items-title cart-items-item'>

                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{carditems[item._id]}</p>
                    <p> ${(item.price * carditems[item._id]).toFixed(2)}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>








                  </div>
                  <hr />








                </div>

              )
            }
          }
          )}
        </div>

        <div className="cart-bottom">
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
            <button onClick={()=>navigate('/placeholder')}>PROCEED TO CHECKOUT</button>


          </div>
          <div className="cart-promocode">
            <div>
              <p>
                If you have promocode,Enter it here
              </p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>


  )
}

export default Cart







