import React from 'react'
import'./about.css'
import background from './assets/background.svg'

function About() {
  return (
    <div className='aboutus'>
      <h1 className="title">من نحن</h1>
      <div className='aboutus-body'>
      <p>.نحن نريد نشر الدين الأسلامي و أزالة الصورة النمطية الخاطئة عنه في العالم ,عن طريق أن نريهم ما هو الأسلام الحقيقي</p>
      <p>.نحن نقوم بجمع كل التبرعات من موقعنا الالكتروني أول بأول و شراء المصاحف و توزيعها في دول غير المسلمين أو الدول التي تحتاج توعية بدينها الأسلامي</p>
      <p>.لدينا موزعين للقرأن في كذا دول مثل أميريكا, أستراليا, فرنسا, و تركيا</p>
      <p id="reverts-scroll">.نتمني أن تدعمونا في حركتنا و تشاركوا معنا في نشر دين الله عز و جل</p>
    </div>
    </div>
  )
}

export default About
