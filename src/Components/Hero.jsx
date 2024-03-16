import React from "react";
import "../App.css";
import { IconTrendingUp } from "@tabler/icons-react";

function Hero() {
  const urls = [
    "Spending too much on marketing?",
    "Not able to reach your Industry Specific audience?",
    "Suffering from low conversion rates?",
  ];

  const stats = [
    {
      title: "Ads Displayed",
      value: "31K",
    },
    {
      title: "New Clients",
      value: "4,200",
    },
    {
      title: "Conversion Rate (Highest in the market)",
      value: "50%",
    },
  ];

  return (
    <div className="outer">
      <div className="hero-main">
        <div className="hero-content">
          <div className="text-column">
            <div className="headings">
              <h1 className=" text-white font-semibold text-[10vw] md:text-[2.5vw]">
                <b className="text-[10vw] md md:text-[2.5vw] text-green-500">
                  Save Money & Generate Leads{" "}
                </b>{" "}
                with targeted ads for your Industry.
                <IconTrendingUp
                  className="w-[10vw] md:text-[2.5vw] text-green-500"
                  stroke={2}
                />
              </h1>
              <h3 className="text-white font-medium text-[5vw] md:text-[1.5vw]">
                Targeted{" "}
                <u className="text-[5vw] md:text-[1.5vw] text-pri-orange">
                  Advertising Solutions
                </u>{" "}
                tailored{" "}
                <u className="text-[5vw] md:text-[1.5vw] text-pri-orange">
                  for you
                </u>{" "}
                in the Renewable Energy Sector
              </h3>
            </div>
            <div className="actions">
              <button>Get Quote</button>
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow h-fit text-center mb-[2vw]">
            {stats.map((field, index) => (
              <div className="stat heroStat" key={index}>
                <div className="stat-title">{field.title}</div>
                <div className="stat-value">{field.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
