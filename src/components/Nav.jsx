import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
  return (
    <div className='navbar__container'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Thefork-logo-green.svg/2560px-Thefork-logo-green.svg.png" alt="" className='navbar__logo'/>
        <ul className='navbar__list'>
            <li className="navbar__link">Your Fridge</li>
            <li className="navbar__link">About Us</li>
        </ul>
    </div>
  )
}

export default Nav