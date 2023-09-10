import React, { createContext, useState } from 'react'
import { Products } from '../product';

export const ShopContext  = createContext(null);

const defaultCart = () =>{
    let cart = {};
    for(let i = 1; i < Products.length + 1; i++){
        cart[i]=0;
    }
    return cart;
};


const ShopContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(defaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+ 1}));
    };

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemAmount = (newAmt, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmt}));
    };

    const getTotalamt = () =>{
        let totalAmt = 0;
        for(const item in cartItems ){
            if(cartItems[item] > 0){
                let itemInfo = Products.find((product) => product.id === Number(item));
              
                
                totalAmt += cartItems[item] * itemInfo.Price;
            
            }
        }
        return totalAmt;
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalamt};

    

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider