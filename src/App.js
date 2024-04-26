import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
