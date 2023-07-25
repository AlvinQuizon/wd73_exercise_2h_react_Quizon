import React, { useEffect, useState } from 'react'
import { Product } from './Product.jsx'
import './Shop.css'

export const Shop = () => {
  const [ products, setProducts ] = useState ([ ])
  const [ cartItemCounter, setCartItemCounter ] = useState (0)

  useEffect (() => {
    document.title = 'Shop'
  }, [])

  useEffect (() => {
    fetch ('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => {
    console.log(data)
    setProducts(data)
  })
  }, [setProducts])

  function addToCart() {
    setCartItemCounter(cartItemCounter + 1)
  }
  
  return (
    <>
      <h1 className='text-light'>Cart:<span className='fw-bold'>{cartItemCounter}</span></h1>
      <div className='shop'>
        <div className='shopTitle mb-5'>
          <h1 className='storeTitle'>AlQUi Tech</h1>
        </div>
        <div className='products d-flex flex-wrap'> 
          {products.map((product) => (
            <Product 
            key={product.id} 
            title={product.title}
            price={product.price}
            image={product.image}
            addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  
  )
}
