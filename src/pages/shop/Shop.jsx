import React, { useContext, useEffect, useState } from 'react'
import { Product } from './Product.jsx'
import './Shop.css'
import { MyContext } from '../../context/Mycontext.jsx'

export const Shop = () => {
  // local state
  const [ products, setProducts ] = useState ([ ])

  // global state
  const { cartItemCounter } = useContext(MyContext)
 
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

 
  return (
    <>
      <div className='shop'>
        <div className='shopTitle mb-5'>
          <h1 className='storeTitle'>Elysian's Emporium</h1>
        </div>
        <div className='products d-flex flex-wrap'> 
          {products.map((product) => (
            <Product 
            key={product.id} 
            title={product.title}
            price={product.price}
            image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  
  )
}
