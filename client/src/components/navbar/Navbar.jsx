import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar__container">
        <div className="navbar__logo">
            Bandsite
        </div>
        <ul className="navbar__links">
            <li className="navbar__link">
                <Link to="/">Biography</Link>
            </li>
            <li className="navbar__link">
                <Link to="/shows">Shows</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar