import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import TravelPoint from "./components/TravelPoint";
import KeyFeatures from "./components/KeyFeatures";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonials";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <TravelPoint />
      <KeyFeatures />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
