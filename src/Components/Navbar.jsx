import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const navLinks = [
    {
      btnName: "About Us",
      link: "#",
    },
    {
      btnName: "Contact Us",
      link: "#",
    },
    {
      btnName: "Get Quote",
      link: "#",
    },
  ];

  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <div className="nav-main">
        <div className="logo">RenewE</div>

        {/* For Large Screen */}
        <ul className="nav-links">
          {navLinks.map((btn, i) => (
            <li key={i}>
              <a className="text-[1.1vw] hover:font-semibold" href={btn.link}>
                {btn.btnName}
              </a>
            </li>
          ))}

          <button className="btn bg-pri-green hover:bg-pri-greenHover hover:scale-105  ease-out btn-md sm:btn-lg md:btn-md lg:btn-md">
            Start Advertising Now
          </button>
        </ul>

        {/* For Small Screen */}
        <div className="flex-none w-[15vw] h-[15vw] md:hidden">
          <button
            className="btn btn-square btn-ghost w-[10vw] h-[10vw]"
            onClick={() => {setshowMenu(!showMenu)
            console.log(showMenu)}}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width={100}
              height={100}
              className="inline-block w-[15vw] h-[15vw] stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative top=[15vw] left-[2vw] w-[100vw]">
        {showMenu && (
          <>
            <div className="bg-white rounded shadow-md py-3 px-6 absolute top-8 right-8 z-50 mobile-menu">
              <h3 className="mb-3 text-[5vw] text-center font-bold uppercase tracking-widest">
                Menu
              </h3>
              <hr />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
