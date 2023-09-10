import React,{useContext} from 'react'
import {Products} from '../product'
import { ShopContext } from '../context/shop-context'
import CartItem from '../components/CartItem'

import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { cartItems,getTotalamt } = useContext(ShopContext);
    const totalAmt = getTotalamt();

    const navigate = useNavigate();

  return (
    <div className='cart'>
        <div className='cartTitle'>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {Products.map((product) => {
              if(cartItems[product.id] !== 0){
                return <CartItem data = {product} />
              }
            })}
        </div>
        {totalAmt > 0 ?
         (
            <div className='checkout'>
            <p>Subtotal: ${totalAmt}</p>
            <div className='button'>
            <button onClick={() => navigate('/Shop')}>Continue Shopping</button>
            <button>Checkout</button>
            </div>
        </div>
         ) :
          (<><h1 className='empty'> Your Cart is Empty</h1>
          <div className='lastdiv'>
          <button className='btn' onClick={() => navigate('/Shop')}>Continue Shopping</button></div></>)}
        
    </div>
  )
}

export default Cart