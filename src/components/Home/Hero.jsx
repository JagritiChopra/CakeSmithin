import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const colors = {
    primary: "#d8876e",
    background: "#121212",
    card: "#1E1E1E",
    offWhite: "#F5F5F5",
    softCream: "#ECE0D1",
    borderLight: "rgba(255,255,255,0.1)",
  };

  return (
    <section
      className="relative px-6 lg:px-20 py-3 h-[100vh] lg:py-0 overflow-hidden mt-0"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit border"
            style={{
              backgroundColor: colors.card,
              color: colors.primary,
              borderColor: colors.borderLight,
            }}
          >
            <span className="material-symbols-outlined text-sm">
              auto_awesome
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Freshly Baked Since 2022
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            style={{ color: colors.offWhite }}
          >
            Baking Memories{" "}
            <span className="italic" style={{ color: colors.primary }}>
              Every Day
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed"
            style={{ color: `${colors.softCream}CC` }}
          >
            Artisan sourdough, buttery croissants, and seasonal pastries
            handcrafted with patience and locally-sourced grains. Delivered
            fresh from our wood-fired oven.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button
              className="h-14 px-10 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: colors.primary,
                color: "#fff",
                boxShadow: `0 12px 20px -8px ${colors.primary}66`,
              }}
            >
              <Link to="/menu" >  Browse Menu
              </Link>
             
            </button>

            <button
              className="h-14 px-8 rounded-xl font-bold text-lg transition-all hover:bg-[#1a1a1a]"
              style={{
                border: `1px solid ${colors.borderLight}`,
                color: colors.offWhite,
              }}
            >
              <Link to="/our-story">  Our Story</Link>
             
            </button>
          </div>
        </div>

        {/* Right: Image Gallery */}
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <div className="space-y-4 flex flex-col justify-center">
            <div
              className="h-1/2 w-full rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBN1Z7tJztLTyqN9vSew9G1PqqhJ5fNOyhev3wbjV9a1KYuhVxZSrdvv0sQ61h-b52u5LSCkNZxWbv3foQ0vE11W2lW2PaIw0vLRjP1GZgvzLu3zP0uIORxubo-AaL2PN5nnfDpnqUKQUWdzSWhv4Dl_kUpEanWT4cVZY-TdiBxNTJ5DRa29iLrnQD5M4MmRxWWtnEYPwHGd2pq6u81MXJ2iNTbgD0_Zxu66xVBdK5Sz-GV9jc2YyYd01t3mVNXzWpHSdORGUvHePw")',
              }}
            />
            <div
              className="h-[40%] w-full rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                    'url("/images/brownie-coffee.png")',
              }}
            />
          </div>

          <div className="space-y-4">
            <div
              className="h-[40%] w-full rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB921Lu1Wzc4UbT0J_ioE0DjpuxsMkFvlTNCiEo6KPynrpaVG9ok85R1Ou6cLMTlY9vceDZeqHtr0xA_xRsoFEfj3C43irZMEYXex139i9fQXw3lUin7FXEJFnJWWAplyALRF72wYxB3JRhHE7r5AiMmvtfQdW0edbNKx28EGgzbka4ogEin7FQJkwABJEf3VbwAKgO50G96qbnSv0MWqjtZMmbYvI8pk4S_6S7bOTkFBmAFUnfp028LroloXUYkeZhAod8AVw4kKI")',
              }}
            />
            <div
              className="h-1/2 w-full rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFx4PHCbTLFcFLmOedLlrQzgB9CNu_9x47kpL_4L13cROx8oLj00kal6qfLKtimC0EG0jyQKe0t6kP32aMf4Juy3_kLm376fhnWltIBJ766l4J6rW8MB_0TPchJne3YGE5tLCp1DZKht0meq-BePEF1gBH-od5wRqeJf9WShGfGiS9jD48Uhh0M2WU-A8OgtZb4kkkkql0Y0Jtcaa06QY6IdiBGSizu-Z_RFmtMLosAuJ203S5rI71zlqobneDl4YOoJXbUnkNg58")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
