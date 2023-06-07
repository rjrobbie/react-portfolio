import React from 'react'
import '../styles/mobile-nav.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RobCodesLogo from '../assets/RobCodesLogo-Black.png'

const MobileNav = () => {
  return (
    <nav>
        <div className='RobCodesLogo'>
            <img src={RobCodesLogo} alt="RobCodesLogo" />
            <p>RobCodes</p>
        </div>
        <div className='MenuToggle'>
            <FontAwesomeIcon className='fa-bars' icon={faBars} />
        </div>
    </nav>
  )
}

export default MobileNav