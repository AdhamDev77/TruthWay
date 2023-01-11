import React from 'react'
import logo from'./assets/logo.png'
import { Link , NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  function burgerMenu(){
    const mobileMenu = document.querySelector(".mobileMenu")
    mobileMenu.classList.toggle("show");
  }
  return (
    <>
      <nav className='navbarm'>
        <ul>
            <li><a href="/TruthWay"> الصفحة الرأيسية </a></li>
            <li><a href="/TruthWay/#reverts-scroll"> كيف أسلموا </a></li>
            <li><a href="/TruthWay/freequraan"> مصحف مجاني </a></li>
            <li><a href="/TruthWay/"><img alt="Find The truth" src={logo}/></a></li>
            <li><a href="/TruthWay/donate"> تبرع </a></li>
            <li><a href="/TruthWay/contact"> تواصل معنا </a></li>
            <li><a href="/TruthWay/login"> تسجيل دخول </a></li>
        </ul>
        
      </nav>
      <nav className='navbarmm'>
      <ul>
          <li><a href="/"><img alt="Find The truth" src={logo}/></a></li>
          <li><button onClick={burgerMenu}><i class="fa-solid fa-bars"></i></button></li>
          <div className="mobileMenu">
          <ul>
            <li><a className='mobileMenuItem' href="/"> الصفحة الرأيسية </a></li>
            <li><a className='mobileMenuItem' href="/#reverts-scroll"> كيف أسلموا </a></li>
            <li><a className='mobileMenuItem' href="//freequraan"> مصحف مجاني </a></li>
            <li><a className='mobileMenuItem' href="/donate"> تبرع </a></li>
            <li><a className='mobileMenuItem' href="/contact"> تواصل معنا </a></li>
            <li><a className='mobileMenuItem' href="/login"> تسجيل دخول </a></li>
            
        </ul>
        </div>
      </ul>
      
    </nav>
    </>
  )
}

export default Navbar
