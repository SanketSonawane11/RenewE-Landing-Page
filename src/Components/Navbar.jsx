import React from "react";
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

  return (
      <div className="nav-main">
        <div className="logo"></div>

        <ul className="nav-links">
          {navLinks.map((btn, i) => (
            <li key={i}>
              <a className="text-[1.1vw] hover:font-semibold" href={btn.link}>{btn.btnName}</a>
            </li>
          ))}

          <button className="btn bg-pri-green hover:bg-pri-greenHover hover:scale-105  ease-out btn-md sm:btn-lg md:btn-md lg:btn-md">
            Start Advertising Now
          </button>
        </ul>
      </div>
  );
}

export default Navbar;
