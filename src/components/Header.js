import React, { useState } from 'react'
import hamburger from '../assets/hamburger-icon.png'
import exit from '../assets/exit-icon.png'
import './Header.css'
import linkedin from '../assets/linkedin-icon.png'
import github from '../assets/github-icon.png'
import email from '../assets/email-icon.png'



function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  
  const hamburgerSwitch = () => {
    setHamburgerMenu(!hamburgerMenu)
  } 


  return (
    <div id="div-header">
    <nav id="nav-header">
      <ul className="ul-header">
        <li className="li-hamburger">
          <input type="image" src={hamburgerMenu ? exit : hamburger } alt="Hamburger menu"className="input-hamburger" onClick={() => hamburgerSwitch()}/>
        </li>
        <li id="li-header-name">
          Jayden <br/> Banks
        </li>
      </ul>
      <ul className="ul-header ul-nav-desktop">
        <li className="li-nav"><a className="a-nav" href="#root">About</a></li>
        <li className="li-nav"><a className="a-nav" href="#div-skill-set">Projects</a></li>
        <li className="li-nav"><a className="a-nav" href="#div-contact">Contact</a></li>
      </ul>
      <ul className="ul-header" id="ul-header-links">
        <a href="https://www.linkedin.com/in/jayden-banks" target="_blank" rel="noreferrer"><input type="image" className="input-link-header" src={linkedin} alt="linkedin icon"/></a>
        <a href="https://github.com/Jayden-Banks" target="_blank" rel="noreferrer"><input type="image" className="input-link-header" src={github} alt="github icon"/></a>
        <a href="#div-contact"><input type="image" className="input-link-header" src={email} alt="email icon"/></a>
      </ul>
    </nav>
    <div
        id="div-hamburger"
        style={{ display: `${hamburgerMenu ? "inherit" : "none"}` }}
      >
    <ul id="ul-hamburger">
      <li className="li-nav li-nav-hamburger"><a className="a-nav a-nav-hamburger" href="#root" onClick={()=> hamburgerSwitch()}>About</a></li>
      <li className="li-nav li-nav-hamburger"><a className="a-nav a-nav-hamburger" href="#div-skill-set" onClick={()=> hamburgerSwitch()}>Projects</a></li>
      <li className="li-nav li-nav-hamburger"><a className="a-nav a-nav-hamburger" href="#div-contact" onClick={()=> hamburgerSwitch()}>Contact</a></li>
    </ul>
    </div>



    </div>
  )
}

export default Header
