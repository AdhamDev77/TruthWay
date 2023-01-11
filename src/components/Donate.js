import React from "react";
import img6 from "./assets/Slideshow/6.jpg";
import background from './assets/background.svg'
import Footer from './Footer'
import swal from 'sweetalert';
import "./donate.css";

function Donate() {
  function booksCalculate(e) {
    let cashValue = document.querySelector(".cash");
    let bookCount = e.target.value;
    cashValue.value = bookCount * 5;
  }
  function cashCalculate(e) {
    let bookCount = document.querySelector(".books");
    let cashValue = e.target.value;
    bookCount.value = Math.floor(cashValue / 5);
  }
  function donateBtn(e) {
    let bookCount = document.querySelector(".books");
    let cashValue = document.querySelector(".cash");
    bookCount.value = "";
    cashValue.value = "";
    swal({
      title: "للأسف التبرع غير متاح الأن",
      icon: "warning",
    })
  }
  return (
    <div className="donate">
      <div className="donate-container"style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="donate-text">
        <div className="donate-text-container">
          <h1>تبرع الان</h1>
          <p>
            قال -تعالى-: (الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ
            اللَّـهِ ثُمَّ لَا يُتْبِعُونَ مَا أَنفَقُوا مَنًّا وَلَا أَذًى
            لَّهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا
            هُمْ يَحْزَنُونَ)
          </p>
          <p>
            و قال -تعالى-: (مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي
            سَبِيلِ اللَّـهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي
            كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ وَاللَّـهُ يُضَاعِفُ لِمَن ,يَشَاءُ
            وَاللَّـهُ وَاسِعٌ عَلِيمٌ)
          </p>
          <p>
            كلنا نعرف أن القرأن له تأثير قوي علي نفس الأنسان, و هناك العديد من
            الأشخاص الذين أسلموا بسبب قرأتهم لأية قرأنية بالصدفة, شارك معنا في
            نشر كلام الله بين أيدي الناس, هو ليس بالبعيد تماما أن تتسبب في هداية
            شخص أو أكثر بسبب تصدقك بمصحف واحد فقط, و علي الله أجركم و ما توعدون
            ان شاء الله.
          </p>
          <div className="donate-inputs-container">
            <label>عدد المصاحف</label>
            <input
              onChange={booksCalculate}
              className="donate-input books"
              type="number"
            ></input>
            <label>بقيمة</label>
            <div className="donate-cash">
              <input
                onChange={cashCalculate}
                className="donate-input cash"
                type="number"
              ></input>
              <h1>$</h1>
            </div>
            <button onClick={donateBtn}>تبرع</button>
            
            {/* <form>
              <input type="text" placeholder="Full name" name="name" required />
              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                required
              />
              <input type="email" placeholder="Email" name="email" required />
              <input
                type="text"
                placeholder="Address"
                name="address"
                required
              />
              <button type="submit">التالي</button>
            </form> */}
            
            
          </div>
        </div>
      </div>
      <div
        className="donate-image"
        style={{
          backgroundImage: `url(${img6})`,
          backgroundSize: "cover",
        }}
      >
        {" "}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Donate;
