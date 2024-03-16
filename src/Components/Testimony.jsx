import React from "react";
import "../App.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimony() {
  const review = [
    {
      name: "John Doe",
      company: "Solar Solutions Inc.",
      position: "CEO",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      company: "Wind Energy Innovations",
      position: "Marketing Director",
      testimonial:
        "Suspendisse potenti. Vivamus euismod diam non odio facilisis malesuada.",
    },
    {
      name: "Michael Johnson",
      company: "Hydro Power Solutions",
      position: "Operations Manager",
      testimonial:
        "Phasellus nec enim a dui sagittis viverra. Nullam eu nulla in ex consectetur varius.",
    },
    {
      name: "Sarah Lee",
      company: "Renewable Energy Group",
      position: "Finance Analyst",
      testimonial:
        "In hac habitasse platea dictumst. Mauris convallis lacinia enim, eget volutpat lacus.",
    },
  ];

  return (
    <div className="outer">
      <div className="reviews-main">
        <h2 className="text-[5vw] md:text-[2vw] font-semibold">
          Hear from our Clients
        </h2>
        <div className="review-cards">
          {review.map((user, index) => (
            <div className="card" key={index}>
              <div className="h-[40%] w-[100%]">
                <h4 className="text-[1.1vw] font-light">{user.name}</h4>
                <h2 className="text-[1.2vw] font-medium">
                  - {user.position} at {user.company}
                </h2>
              </div>
              <p className="text-[1vw] flex gap-2">
                <FaQuoteLeft className="text-[1vw]" />
                {user.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimony;
