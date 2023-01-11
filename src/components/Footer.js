import React from 'react'
import style from "./footer.css"
import swal from 'sweetalert';
import logo from './assets/logo.png'

function Footer() {
  function sendBtn() {
    let input1 = document.querySelector(".name")
    let input2 = document.querySelector(".phone")
    let input3 = document.querySelector(".email")
    input1.value=""
    input2.value=""
    input3.value=""
    swal({
      title: "تم إرسال رسالتك بنجاح",
      icon: "success",
    })
  }
  return (
    <footer>
      <div className='footer-image'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='footer-info'>
        <h2>معلومات التواصل</h2>
        <h3><i class="fa-solid fa-envelope"></i>example@contact.com</h3>
        <h3><i class="fa-solid fa-phone"></i>(0212) 552 44 35</h3>
      </div>
      <div className='footer-contact'>
      <h2>راسلنا</h2>
      <div className='message'>
      <div className='message-inputs'>
        <input className='name' type="text" name="name" placeholder='الاسم الثلاثي' required/>
        <input className='phone' type="number" name="phone" placeholder='رقم الهاتف' required/>
        <input  className='email' type="email" name="email" placeholder='البريد الالكتروني' required/>
      </div>
      <div className='message-button'>
      <button onClick={sendBtn}>أرسل</button>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
