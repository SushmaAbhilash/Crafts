import React,{useContext} from 'react'
import '../styles/cart.scss'
import { ShopContext } from '../context/shop-context'


const CartItem = (props) => {

    const {id, productName, Price, productImage } = props.data;
    const { cartItems,addToCart,removeFromCart,updateCartItemAmount } = useContext(ShopContext);
  return (
    <div className='cartitem'>
        <img src={productImage} alt='product'/>

        <div className='cartitemdesc'>
            <p><b>{productName}</b></p>
            <p>${Price}</p>

            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange = {(e) => updateCartItemAmount(Number(e.target.value), id) }/>
                <button onClick={() => addToCart(id)}> + </button>
              
            </div>
        </div>
    </div>
  )
}

export default CartItem