import React from "react";
import "./reverts.css";

import Mike from "./assets/Reverts/miketyson.jpg";
import Andrew from "./assets/Reverts/andrewtate.jpg";
import Muhammed from "./assets/Reverts/muhammedali.jpg";
import Jeffery from "./assets/Reverts/jefferylang.jpg";
import Joram from "./assets/Reverts/joramvan.jpg";
import Ruben from "./assets/Reverts/rubenabubakr.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Reverts() {
  const slideReverts = [
    {
      url: `${Mike}`,
      link: "https://www.youtube.com/watch?v=8bQg8WPE_mE",
      caption: "كيف أسلم مايك تايسون",
    },
    {
      url: `${Andrew}`,
      link: "https://www.youtube.com/watch?v=nzYdpq3MOxY",
      caption: "كيف أسلم أندرو تيت",
    },
    {
      url: `${Muhammed}`,
      link: "https://www.youtube.com/watch?v=hRKxqgDN7SM",
      caption: "كيف أسلم محمد علي كلاي",
    },
    {
      url: `${Joram}`,
      link: "https://www.youtube.com/watch?v=-t_Wl6IQKXE",
      caption: "كيف أسلم مايك جورام ڤان",
    },
    {
      url: `${Jeffery}`,
      link: "https://www.youtube.com/watch?v=1X37RCf5dV4",
      caption: "كيف أسلم جيفيري لانج",
    },
    {
      url: `${Ruben}`,
      link: "https://www.youtube.com/watch?v=um0jXRTyO-E",
      caption: "كيف أسلم روبن (أبو بكر)",
    },
  ];
  console.log(slideReverts[0].url)
  return (
    <div id="reverts">
      <h1 id="reverts-title" className="title">كيف أسلموا</h1>
      <div className="reverts-image">
        <div className="reverts-image-container">
          <Slide>
            {slideReverts.map((slideReverts, index) => (
              <div className="each-slide-reverts" key={index}>
                <a href={slideReverts.link}>
                <div
                  className="each-slide-img-reverts"
                  style={{
                    backgroundImage: `url(${slideReverts.url})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span>{slideReverts.caption}</span>
                </div>
                </a>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Reverts;
