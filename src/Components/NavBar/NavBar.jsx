import React from 'react'
import { images } from '../../constant'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar-container'>
      <img className='logo' src={images.logo} alt="" />
    </div>
  )
}

export default NavBar
