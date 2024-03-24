import React from "react";
import "../App.css";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";

function Problems() {
  const problems = [
    {
      title:
        "Are you Paying High Costs for Advertisments with Low Conversion Rates?",
      icon: <GiMoneyStack className="md:text-[2vw] text-[10vw]" />,
      desc: "Many businesses in the renewable energy sector face this challenge, resulting in wasted budget and limited returns on investment.",
    },
    {
      title: "Are you Reaching Uninterested Audiences?",
      icon: <TbTargetArrow className="md:text-[1.5vw] text-[7vw]" />,
      desc: "Traditional advertising methods often fail to effectively target individuals and organizations within the renewable energy sector, leading to wasted resources and missed opportunities.",
    },
    {
      title: "Is your business not growing?",
      icon: <AiOutlineAreaChart className="md:text-[1.5vw] text-[4vw]" />,
      desc: "Are you struggling to gain visibility in the competitive renewable energy market? Many businesses lack the expertise needed to effectively position their products and services, resulting in limited brand visibility and missed opportunities for growth.",
    },
  ];

  return (
    <div className="outer">
      <div className="problem-inner">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="md:text-[2.5vw] text-[6vw] text-center font-semibold">
            Tired of Ineffective Advertising?
          </h1>
          <img className="image w-[40vw]" src="./Problem.jpg" />
        </div>

        <div className="join join-vertical md:w-fit w-full rounded-3xl">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="collapse p-[2vw] min-h-fit hover:border-4 hover:border-pri-orangeHover transition-all ease-in-out duration-400 collapse-arrow active:bg-[#ffd796] join-item border-2 border-base-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title flex gap-[5vw] md:gap-[2vw] justify-start items-center text-[4vw] md:text-[1.5vw] font-medium">
                {problem.icon}
                {problem.title}
              </div>
              <div className="collapse-content font-medium text-[#2a2a2a]">
                <p className="md:ml-[3.5vw] ml-[9vw] md:text-[1vw] text-[3.5vw]">
                  {problem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Problems;
