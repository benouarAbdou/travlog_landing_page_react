import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import TravelPoint from "./components/TravelPoint";
import KeyFeatures from "./components/KeyFeatures";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <TravelPoint />
      <KeyFeatures />
    </div>
  );
}

export default App;
