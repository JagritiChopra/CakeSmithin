import React from "react";

const PartnershipsSection = () => {
  const colors = {
    primary: "#d8876e",
    backgroundDark: "#1E1E1E",
    cardGrey: "#2A2A2A",     // lighter card background
    cardHover: "#333333",   // hover state
    borderGrey: "#3A3A3A",
    offWhite: "#F5F5F5",
    softCream: "#ECE0D1",
  };

const features = [
  {
    icon: "bakery_dining",
    title: "Freshly Baked Every Morning",
    description:
      "Our ovens are fired up before sunrise to bring you warm, golden loaves and cakes baked fresh daily.",
  },
  {
    icon: "cake",
    title: "Handcrafted Cakes & Pastries",
    description:
      "From soft sponge cakes to flaky croissants, everything is made by hand with love and real ingredients.",
  },
 {
  icon: "cookie",
  title: "Fudgy Brownies",
  description:
    "Rich, chocolatey brownies with crackly tops and melt-in-your-mouth centers, baked fresh every day.",
},

  {
    icon: "favorite",
    title: "Baked with Love & Care",
    description:
      "No shortcuts. No preservatives. Just honest baking the way it should be.",
  },
];


  return (
    <section
      className="py-24 px-6 lg:px-20"
      style={{ backgroundColor: colors.backgroundDark }}
    >
      <div className="max-w-7xl mx-auto animate-fadeInUp">
        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6 sticky top-32">
            <div
              className="inline-block p-3 rounded-lg"
              style={{
                backgroundColor: `${colors.primary}1A`,
                color: colors.primary,
              }}
            >
              <span className="material-symbols-outlined text-3xl">
                storefront
              </span>
            </div>

            <h2
              className="text-4xl font-bold tracking-tight leading-tight"
              style={{ color: colors.offWhite }}
            >
              Partnerships for Local Cafes
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{ color: `${colors.softCream}B3` }}
            >
              Elevate your menu with our signature sourdough and viennoiserie.
              We partner with local establishments to bring handcrafted quality
              to your doorstep.
            </p>

            <button
              className="px-8 py-3.5 rounded-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: colors.primary, color: "#fff" }}
            >
              Inquire Now
            </button>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: colors.cardGrey,
                  border: `1px solid ${colors.borderGrey}`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.cardHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.cardGrey)
                }
              >
                <span
                  className="material-symbols-outlined mb-4 block transition-transform group-hover:scale-110"
                  style={{ color: colors.primary }}
                >
                  {feature.icon}
                </span>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.offWhite }}
                >
                  {feature.title}
                </h3>

                <p style={{ color: `${colors.softCream}99` }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
