import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navHeader'>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar;