import React from "react";
import "../App.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimony() {
  const review = [
    {
      name: "John Doe",
      company: "Solar Solutions Inc.",
      position: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum mauris nec purus tristique, sed eleifend libero finibus. Duis nec tortor non eros fringilla varius.",
    },
    {
      name: "Jane Smith",
      company: "Wind Energy Innovations",
      position: "Marketing Director",
      testimonial:
        "Suspendisse potenti. Vivamus euismod diam non odio facilisis malesuada. Sed in ligula eu tellus aliquet fermentum. Ut id urna eu enim consectetur interdum.",
    },
    {
      name: "Michael Johnson",
      company: "Hydro Power Solutions",
      position: "Operations Manager",
      testimonial:
        "Phasellus nec enim a dui sagittis viverra. Nullam eu nulla in ex consectetur varius. Fusce dapibus leo ac neque pretium ultrices.",
    },
    {
      name: "Sarah Lee",
      company: "Renewable Energy Group",
      position: "Finance Analyst",
      testimonial:
        "In hac habitasse platea dictumst. Mauris convallis lacinia enim, eget volutpat lacus feugiat a. Integer non velit in nunc elementum tristique.",
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
            <div className="card">
                <h4>{user.name}</h4>
                <h2>{user.position} at {user.company}</h2>
                <p>{user.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimony;
