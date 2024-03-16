import React from "react";
import "../App.css";
import { IconTrendingUp } from "@tabler/icons-react";

function Hero() {
  const urls = [
    "Spending too much on marketing?",
    "Not able to reach your Industry Specific audience?",
    "Suffering from low conversion rates?",
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
          <div className="stats stats-vertical lg:stats-horizontal shadow mb-[2vw]">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
