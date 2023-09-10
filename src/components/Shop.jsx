import React from 'react'
import {Products} from '../product'
import  Product  from './Product'


const Shop = () => {
  return (
    <div className='shop'>
      
        <div className='shopTitle'>
            <h1>Lil Things</h1>
        </div>
        <div className='products'>
          {Products.map((product) => (
            <Product data = {product}/>
         ) )}
        </div>

    </div>
  )
}

export default Shop