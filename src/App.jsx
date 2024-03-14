import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'
import Hero from "./Components/Hero";
import Problems from "./Components/Problems";


function App() {
  return (
    <div className="main-body">
      <Navbar />
      <Hero/>
      <Problems/>
    </div>
  );
}

export default App;
