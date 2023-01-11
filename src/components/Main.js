import React from "react";
import "./main.css";
import background from './assets/background.svg'
import Donated from "./Donated";
import About from "./About";
import Reverts from "./Reverts";
import Footer from "./Footer";
import img1 from "./assets/Slideshow/1.jpg";
import img2 from "./assets/Slideshow/2.jpg";
import img3 from "./assets/Slideshow/3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const slideImages = [
    {
      url: `${img1}`,
      caption: "",
    },
    {
      url: `${img2}`,
      caption: "",
    },
    {
      url: `${img3}`,
      caption: "",
    },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="home-text">
          <h1>صديقي ,هل فعلاً تريد أن تشارك في الدعوة الي الحق؟</h1>
        </div>
        <div className="home-image">
          <div className="home-image-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div
                    className="each-slide-img"
                    style={{
                      backgroundImage: `url(${slideImage.url})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <Donated />
      {/*<div className='info-text'>
           <p>.اليوم ، أكثر من 1.5 مليار شخص في جميع أنحاء العالم ملتزمون بعقيدة الإسلام. يسمون مسلمين ، أي الذين يخضعون لإرادة الله -</p>

<p>.تاريخ الإسلام يبدأ من النبي آدم. يؤمن المسلمون بجميع الأنبياء المرسلين من الله ، بما في ذلك نوح وإبراهيم وموسى وعيسى ومحمد (عليهم السلام جميعًا) -</p>

<p>.لسوء الحظ ، فقد تعرض الإسلام اليوم للإساءة من قبل أولئك الذين يدعون اعتناقه ومن لا يجاهرون به. على الرغم من ذلك ، فإن الإسلام هو الدين الأسرع نموًا في العالم اليوم -</p>

<p>.بدلاً من الاعتماد على الآخرين ، نشجعك على تعلم وفهم المزيد عن هذا الإيمان بنفسك. اكتشف واتخذ قرارك المستنير بشأن الإسلام -</p>

<p>.يمكنك طلب المؤلفات التمهيدية التي توفر معلومات أساسية عن الإسلام. لطلب هذا الأدب الإسلامي المجاني ، يرجى النقر فوق الزر الموجود -</p>
      </div> */}
      <About />
      <Reverts />
      <Footer />
    </div>
  );
}

export default Home;
