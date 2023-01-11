import React from 'react'
import background from './assets/background.svg'
import Footer from './Footer'
import './freequraan.css'
function freequraan() {
  return (
    <div className="freequraan"      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
        <div className='soon-container'>
      <h1 className='soon'>قريبا جدا</h1>
      </div>
      <Footer />
    </div>
  )
}

export default freequraan
