import React from 'react'
import logo from './assets/logo.png'
import style from './contact.css'
import swal from 'sweetalert';
import Footer from './Footer'
function Contact() {
  function sendBtn() {
    let input1 = document.querySelector(".name")
    let input2 = document.querySelector(".phone")
    let input3 = document.querySelector(".email")
    let input4 = document.querySelector(".dm")
    input1.value=""
    input2.value=""
    input3.value=""
    input4.value=""
    swal({
      title: "تم إرسال رسالتك بنجاح",
      icon: "success",
    })
  }
  return (
    <>
    <div className='contact'>
        <div className='contact-image'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='contact-section'>
      <h2>راسلنا</h2>
      <div className='message'>
      <div className='message-inputs'>
        <input className='name' type="text" name="name" placeholder='الاسم الثلاثي' required/>
        <input className='phone' type="number" name="phone" placeholder='رقم الهاتف' required/>
        <input className='email' type="email" name="email" placeholder='البريد الالكتروني' required/>
        <textarea className='dm' type="text" name="message" placeholder='رسالتك' required/>
      </div>
      <div className='message-button'>
      <button onClick={sendBtn}>أرسل</button>
      </div>
      </div>
      </div>
   
    </div>
     <Footer />
     </>
  )

  }
export default Contact
