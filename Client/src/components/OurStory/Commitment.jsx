import React from "react";

const Commitment = () => {
  return (
    <section className="bg-[#1E1E1E] border-y border-white/5 py-24 px-6 lg:px-20 animate-fadeInUp">
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
            At The CakeSmith, we are committed to creating cakes and brownies that
            are always <strong>fresh, clean, and 100% eggless</strong>. We also
            offer <strong>sugar-free options</strong>, like our dry fruit cakes, for
            those who want a sweet treat while taking care of their health. Every
            bite is made with care, using quality ingredients, so you can enjoy your
            sweet moments with peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
