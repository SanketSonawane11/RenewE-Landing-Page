import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'
import Hero from "./Components/Hero";
import Problems from "./Components/Problems";
import Testimony from "./Components/Testimony";


function App() {
  return (
    <div className="main-body">
      <Navbar />
      <Hero/>
      <Testimony/>
      <Problems/>
    </div>
  );
}

export default App;
