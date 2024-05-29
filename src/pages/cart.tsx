import React, { useEffect } from 'react'
import { useState } from 'react';
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/cartitems';
import { Link } from 'react-router-dom';
import withUpFadeIn from '../components/withupfade';
const cartItems=[{}]
const subtotal = 5000
const shippingCharges = 100
const tax = subtotal * 0.18
const discount= 400
const total = (subtotal+shippingCharges+tax) - discount


const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  useEffect(() => {
    const timeid = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true)
        else setIsValidCouponCode(false)
      
    },1000);
  
    return () => {
      clearTimeout(timeid)
      setIsValidCouponCode(false)
    }
  }, [couponCode])
  
  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ? (
            
              cartItems.map((i,idx)=>(
                <CartItem key={idx} cartItem={i}/>
                
              ))
             
          ) : (
            <h1>Add something to the cart</h1>
          )
        }
           {/* {
            cartItems.map((i,idx)=>(
              <CartItem key={idx} cartItem={i}/>
              
            ))
           } */}
      </main>
      <aside>
        <div className="billing">
        <div className="leftside">
          <p>Subtotal:</p>
          <p>Shipping cost:</p>
          <p>Tax:</p>
          <p>Discount:</p>
          <p className='total'><b>Total:</b></p>
        </div>
        <div className="rightside">
          <p>₹{subtotal}</p>
          <p>₹{shippingCharges}</p>
          <p>₹{tax}</p>
          <p><em className="red"> - ₹{discount}</em></p>
          <p className='total'><b>₹{total}</b></p>
        </div>
        </div>
        
        {/* <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <div className='bar'></div>
        <b>Total: ₹{total}</b>
        </p> */}
        
      
          
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        /> 
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

{cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
     
    </div>
  )
}

export default withUpFadeIn(Cart)