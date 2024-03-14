import React from "react";
import "../App.css";

function Hero() {

  const urls = [
    "Spending too much on marketing?",
    "Not able to reach your Industry Specific audience?",
    "Suffering from low conversion rates?",
  ];

  return (
    <div className="outer">
      <div className="hero-main">
        <div className="bg-effect"></div>
        <div className="logo">RenewE</div>

        <div className="hero-content">
          <div className="text-column">
            <div className="headings">
              <h1 className="font-[#2a2a2a] font-semibold text-[5vw] md:text-[2.5vw]">
                Elevate Your Reach in Renewable Energy markets{" "}
              </h1>
              <h3 className="font-[#2a2a2a] font-medium text-[3vw] md:text-[1.5vw]">
                Targeted Advertising Solutions Tailored for Success in the
                Renewable Energy Sector
              </h3>
            </div>
            <div className="actions">
              <button>Get Quote</button>
            </div>
            <div className="info">Ithe validation show karu shakto</div>
          </div>

          <div className="img-column"></div>
          <div className="h-96 carousel questions carousel-vertical rounded-box mt-[5vw] md:hidden w-[100%]">
            {urls.map((url, index) => (
              <div className="questions carousel-item h-full text-[5vw]" key={index}>
                {url}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
