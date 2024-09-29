import React from 'react'
import {Link} from 'react-router-dom'
import BandsiteLogo from '../bandsiteLogo/BandsiteLogo'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar__container">
        <BandsiteLogo/>
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