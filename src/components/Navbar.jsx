import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { MyContext } from '../context/MyContext'
import { useContext } from 'react'

export const Navbar = () => {
  const { cartItemCounter } = useContext(MyContext)
  return (
    <>
     
      <div className='navbar d-flex justify-content-center'>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'> 
          <span className='text-dark cartItems'> <ShoppingCart size={35} weight="bold" /><span className='cartItem'>{cartItemCounter}</span></span>  
        </Link>
       
      </div>
    </div>
    </>
  )
}
