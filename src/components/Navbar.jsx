import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
      <div className='navbar d-flex justify-content-center'>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart <ShoppingCart size={32} /> </Link>
      </div>
    </div>
    </>
  )
}
