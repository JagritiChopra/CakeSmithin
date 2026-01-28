import React from "react";

const TestimonialSection = () => {
  const colors = {
    primary: "#d8876e",
    background: "#121212",
    card: "#1E1E1E",
    offWhite: "#F5F5F5",
    softCream: "#ECE0D1",
    borderLight: "rgba(255,255,255,0.1)",
    borderSoft: "rgba(255,255,255,0.05)",
  };

 const testimonials = [
  {
    name: "Harpreet Kaur",
    role: "Neighborhood Customer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review: "Their brownies are dangerously good. I can’t leave without buying at least two!",
  },
  {
    name: "Gurdeep Singh",
    role: "Daily Visitor",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    review: "Best bread in the area. Soft inside, crispy outside — just perfect with chai.",
  },
  {
    name: "Simran Kaur",
    role: "College Student",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review: "I love the cakes here! Not too sweet, super fresh, and beautifully decorated.",
  },
  {
    name: "Amritpal Singh",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    review: "You can taste the quality in every bite. Their sourdough is top-tier.",
  },
  {
    name: "Navjot Kaur",
    role: "Local Regular",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "The croissants and brownies are my weekend ritual now.",
  },
  {
    name: "Manpreet Singh",
    role: "Office Professional",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review: "Fresh, warm, and comforting — exactly what a bakery should feel like.",
  },
  {
    name: "Amandeep Kaur",
    role: "Home Baker",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    review: "Their cakes inspire me to bake better at home. Truly delicious.",
  },
  {
    name: "Jaspreet Singh",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    review: "The chocolate brownies here are unreal. Rich, fudgy, and perfect.",
  },
  {
    name: "Harman Kaur",
    role: "Local Artist",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    review: "Every visit feels cozy. The smell of fresh bread is addictive.",
  },
  {
    name: "Sukhwinder Singh",
    role: "Retired Teacher",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    review: "Reminds me of old-style bakeries. Honest taste, no nonsense.",
  },
  {
    name: "Rajveer Kaur",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    review: "Even their multigrain bread is soft and tasty. Big fan!",
  },
  {
    name: "Karanjit Singh",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    review: "Perfect place to grab a coffee and a brownie while working.",
  },
];


  return (
    <section
      className="py-24 px-6 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-3xl lg:text-4xl font-black uppercase tracking-tight"
            style={{ color: colors.offWhite }}
          >
            What Our Neighbours Say
          </h2>
          <div
            className="h-1 w-20 mx-auto rounded-full"
            style={{ backgroundColor: colors.primary }}
          />
          <p
            className="max-w-xl mx-auto"
            style={{ color: `${colors.softCream}99` }}
          >
            Fresh opinions from the people who stop by for bread, pastries, and
            warm mornings.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-8 marquee">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[320px] min-h-[340px] p-8 rounded-2xl shadow-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: colors.card,
                  border: `1px solid ${colors.borderLight}`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{ color: colors.primary, fontSize: 18 }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p
                  className="text-lg italic leading-relaxed mt-6"
                  style={{ color: `${colors.softCream}CC` }}
                >
                  “{t.review}”
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-4 pt-4 mt-8"
                  style={{ borderTop: `1px solid ${colors.borderSoft}` }}
                >
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${t.image})` }}
                  />
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ color: colors.offWhite }}
                    >
                      {t.name}
                    </h4>
                    <p
                      className="text-xs uppercase tracking-widest font-semibold"
                      style={{ color: `${colors.softCream}66` }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .marquee {
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
