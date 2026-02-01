import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation.js";

const AboutUs = () => {
  const [ref, animationClass] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`relative h-[100vh] px-6 lg:px-20 flex items-center justify-center transition-all duration-700 ${animationClass}`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <span className="block text-[#c66b52] uppercase tracking-[0.25em] text-sm font-semibold">
          Our Journey
        </span>

        <h2 className="font-serif italic text-white text-5xl sm:text-6xl leading-tight">
          Since 2022
        </h2>

        <div className="font-serif text-xl sm:text-2xl leading-relaxed text-[#F5F5F0]/75 space-y-8 max-w-3xl mx-auto">
          <p>
            The CakeSmith began in a small kitchen, where a passionate home baker
            turned her love for sweets into art.
          </p>

          <p>
            What started with handmade cakes and brownies shared with friends soon
            grew into an online sensation on{" "}
            <a
              href="https://www.instagram.com/cake.smithin?igsh=MWswd2oyaWs4dzRrdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c66b52] hover:text-[#e07a63] underline underline-offset-4 transition"
            >
              Instagram
            </a>
            . Today, The CakeSmith not only delights taste buds, but also teaches
            the art of baking to others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
