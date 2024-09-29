import React from 'react'
import Logo from '../../assets/logo/logo-bandsite.svg'

const BandsiteLogo = () => {
  return (
    <div className="bandsiteLogo__container">
        <img src={Logo} alt="logo" className="bandsiteLogo__logo" />
    </div>
  )
}

export default BandsiteLogo