import React from 'react'
import './donated.css'
import logo from './assets/logo.png'
import CountUp from 'react-countup';


function Donated() {
  return (
    <div className='donated'>
      <img alt="logo" src={logo}></img>
      <CountUp
  start={1}
  end={7945}
  duration={2}
  prefix="تم التبرع ب "
  suffix=" مصحف الي الأن"
  enableScrollSpy
/>
    </div>
  )
}

export default Donated
