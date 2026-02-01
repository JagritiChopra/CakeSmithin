import React from "react";

import Hero from "../components/OurStory/Hero";

import Commitment from "../components/OurStory/Commitment";
import Magic from "../components/OurStory/Magic";


const OurStory = () => {
  return (
    <div className="bg-[#121212] text-[#F5F5F0] antialiased transition-colors duration-300">
      <Hero/>
   
      <Commitment />
      <Magic />
    </div>
  );
};

export default OurStory;
