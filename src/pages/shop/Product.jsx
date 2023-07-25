import React from 'react'
import './Shop.css'

export const Product = (props) => {
  const { id, image, title, price, addToCart } = props;
  return (
    <>
      <div className="card bg-color me-4 mb-4 product-style p-2 mb-2" style={{width: '20rem', height: '22rem'}}>
        <img src={image} className="card-img-top rounded mx-auto d-block mt-2"  style={{width: '100px', height: '130px'}} />
        <div className='description'>
          <h5 className="card-title text-start">Title: {title}</h5>
          <p className="card-text text-start"><b>Price:</b> ${price}</p>
          <button className='addToCartBtn pt-2 align-center' onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

