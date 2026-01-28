import React from 'react'
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="  bg-[#121212] text-[#F5F5F0] antialiased transition-colors duration-300">
      {/* Hero */}
      <section className="relative w-full h-screen min-h-100  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFx4PHCbTLFcFLmOedLlrQzgB9CNu_9x47kpL_4L13cROx8oLj00kal6qfLKtimC0EG0jyQKe0t6kP32aMf4Juy3_kLm376fhnWltIBJ766l4J6rW8MB_0TPchJne3YGE5tLCp1DZKht0meq-BePEF1gBH-od5wRqeJf9WShGfGiS9jD48Uhh0M2WU-A8OgtZb4kkkkql0Y0Jtcaa06QY6IdiBGSizu-Z_RFmtMLosAuJ203S5rI71zlqobneDl4YOoJXbUnkNg58")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-[#F5F5F0] mb-4 italic">
             Sweet Moments, Freshly Baked
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light uppercase tracking-[0.2em]">
             Handcrafted cakes and brownies to make every celebration memorable
          </p>
        </div>
      </section>

      {/* Since 2012 */}
     <section className="relative h-[100vh] px-6 lg:px-20 flex items-center justify-center">
  <div className="max-w-4xl mx-auto text-center space-y-10">
    {/* Subtle year accent */}
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
        grew into an online sensation on    <a
          href="https://www.instagram.com/cake.smithin?igsh=MWswd2oyaWs4dzRrdA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c66b52] hover:text-[#e07a63] underline underline-offset-4 transition"
        >
          Instagram
        </a>. Today, The CakeSmith not only
        delights taste buds, but also teaches the art of baking to others.
      </p>
    </div>
  </div>
</section>


      {/* Craft Section */}
      <section className="bg-[#1E1E1E] border-y border-white/5 py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="aspect-square rounded-2xl bg-cover bg-center shadow-2xl border border-white/5"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBN1Z7tJztLTyqN9vSew9G1PqqhJ5fNOyhev3wbjV9a1KYuhVxZSrdvv0sQ61h-b52u5LSCkNZxWbv3foQ0vE11W2lW2PaIw0vLRjP1GZgvzLu3zP0uIORxubo-AaL2PN5nnfDpnqUKQUWdzSWhv4Dl_kUpEanWT4cVZY-TdiBxNTJ5DRa29iLrnQD5M4MmRxWWtnEYPwHGd2pq6u81MXJ2iNTbgD0_Zxu66xVBdK5Sz-GV9jc2YyYd01t3mVNXzWpHSdORGUvHePw")',
            }}
          ></div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1 border border-[#c66b52] text-[#c66b52] text-xs font-bold uppercase tracking-widest rounded-full">
              The Craft
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white italic">
              Our Commitment
            </h2>
            <p className="text-lg leading-relaxed text-[#F5F5F0]/70">
               At The CakeSmith, we are committed to creating cakes and brownies that are always <strong>fresh, clean, and 100% eggless</strong>. We also offer <strong>sugar-free options</strong>, like our dry fruit cakes, for those who want a sweet treat while taking care of their health. Every bite is made with care, using quality ingredients, so you can enjoy your sweet moments with peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="h-[100vh] px-6 lg:px-20 flex items-center justify-center text-center">
  <div className="max-w-4xl mx-auto space-y-10 mt-12">
    <h2 className="font-serif italic text-white text-5xl sm:text-6xl lg:text-7xl leading-tight">
      Experience the magic ✨
    </h2>

    <p className="text-xl sm:text-2xl text-[#F5F5F0]/60 max-w-2xl mx-auto">
      Every cake and brownie is freshly baked with love, ready to make your day sweeter.
    </p>

    <div className="flex flex-wrap justify-center gap-5 pt-4">
      <Link to="/menu">
        <button className="bg-[#c66b52] text-white h-16 px-12 rounded-xl font-bold text-xl hover:shadow-xl hover:shadow-[#c66b52]/30 transition-all">
          Browse the Menu
        </button>
      </Link>

      <Link to="/contact">
        <button className="border-2 border-white/10 h-16 px-10 rounded-xl font-bold text-xl hover:bg-white/5 transition-all text-white">
          Visit the Bakery
        </button>
      </Link>
    </div>
  </div>
</section>


    </div>
  );
};

export default OurStory;
