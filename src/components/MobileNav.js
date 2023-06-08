import React, { useState } from 'react'
import '../styles/mobile-nav.css'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RobCodesLogo from '../assets/RobCodesLogo-Black.png'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
        <div className='RobCodesLogo'>
            <img src={RobCodesLogo} alt="RobCodesLogo" />
            <p>RobCodes</p>
        </div>
        <div className={`MenuToggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon 
          className='fa-bars'
          icon={isOpen ? faXmark : faBars} 
        />
      </div>
    </nav>
  )
}

export default MobileNav