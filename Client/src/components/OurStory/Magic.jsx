import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation.js"; // make sure path is correct

const Magic = () => {
  // Attach scroll animation hook
  const [ref, animationClass] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`h-[100vh] px-6 lg:px-20 flex items-center justify-center text-center transition-all duration-700 ${animationClass}`}
    >
      <div className="max-w-4xl mx-auto space-y-10 mt-12">
        <h2 className="font-serif italic text-white text-5xl sm:text-6xl lg:text-7xl leading-tight">
          Experience the magic ✨
        </h2>

        <p className="text-xl sm:text-2xl text-[#F5F5F0]/60 max-w-2xl mx-auto">
          Every cake and brownie is freshly baked with love, ready to make your day sweeter.
        </p>

        <div className="flex flex-wrap justify-center gap-5 pt-4">
          <Link to="/menu">
            <button className="
              bg-[#c66b52] text-white h-16 px-12 rounded-xl font-bold text-xl
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-xl hover:shadow-[#c66b52]/40
              active:scale-95
            ">
              Browse the Menu
            </button>
          </Link>

          <Link to="/contact">
            <button className="
              border-2 border-white/10 h-16 px-10 rounded-xl font-bold text-xl text-white
              transition-all duration-300 ease-out
              hover:scale-105 hover:bg-white/10 hover:shadow-lg
              active:scale-95
            ">
              Visit the Bakery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Magic;
