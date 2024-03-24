import React from "react";
import "../App.css";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";

function Problems() {
  const problems = [
    {
      title: "Are you Paying High Costs for Advertisments with Low Conversion Rates?",
      icon: <GiMoneyStack className="md:text-[2vw] text-[5vw]" />,
      desc: "Many businesses in the renewable energy sector face this challenge, resulting in wasted budget and limited returns on investment.",
    },
    {
      title: "Are you Reaching Uninterested Audiences?",
      icon: <TbTargetArrow className="md:text-[1.5vw] text-[3.8vw]" />,
      desc: "Traditional advertising methods often fail to effectively target individuals and organizations within the renewable energy sector, leading to wasted resources and missed opportunities.",
    },
    {
      title: "Is your business not growing?",
      icon: <AiOutlineAreaChart className="md:text-[1.5vw] text-[3.8vw]" />,
      desc: "Are you struggling to gain visibility in the competitive renewable energy market? Many businesses lack the expertise needed to effectively position their products and services, resulting in limited brand visibility and missed opportunities for growth.",
    },
  ];

  return (
    <div className="outer">
      <div className="problem-inner">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="md:text-[2.5vw] text-[5.5vw] text-center font-semibold">
            Tired of Ineffective Advertising?
          </h1>
          <img className="image w-[40vw]" src="./Problem.jpg" />
        </div>

        <div className="join join-vertical md:w-fit w-full rounded-3xl">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-2 border-base-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title flex gap-[2vw] md:gap-[2vw] justify-start items-center text-[3.7vw] md:text-[1.5vw] font-medium">
                {problem.icon}
                {problem.title}
              </div>
              <div className="collapse-content font-medium text-[#2a2a2a]">
                <p className="md:ml-[3.5vw] ml-[5vw] md:text-[1vw] text-[3vw]">{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Problems;
