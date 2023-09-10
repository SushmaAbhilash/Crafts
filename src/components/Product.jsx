import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'

const Product = (props) => {

    const {id, productName, Price, productImage } = props.data;

    const { addToCart,cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage} />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${Price}</p>
        </div>
        <button className='addtoCartBtn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>

    </div>
  )
}

export default Product