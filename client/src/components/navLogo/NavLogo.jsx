import React from 'react'
import Logo from '../../assets/logo/logo-bandsite.svg'
import './NavLogo.css'

const NavLogo = () => {
  return (
    <div className="navLogo__container">
        <img src={Logo} alt="logo" className="navLogo__logo" />
    </div>
  )
}

export default NavLogo