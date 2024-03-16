import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'
import Hero from "./Components/Hero";
import Problems from "./Components/Problems";
import Testimony from "./Components/Testimony";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="main-body">
      <Navbar />
      <Hero/>
      <Testimony/>
      <Problems/>
      <Footer/>
    </div>
  );
}

export default App;
