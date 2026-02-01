import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[100vh] overflow-hidden animate-fadeInUp">
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
  );
};

export default Hero;
