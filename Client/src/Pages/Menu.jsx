import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "../Data/MenuData.js";

const filters = [
  "All Items",
  "Brownies",
  "Dry Cakes",
  "Icing Cakes",
  "Wedding Cakes",
  "Engagement Cakes",
  "Customized Cakes",
];

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState("All Items");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filteredItems =
    activeFilter === "All Items"
      ? menuData
      : menuData.filter((item) => item.category === activeFilter);

  // ➕ Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // 🚀 Go to checkout
  const goToCheckout = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/checkout");
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen relative">
      {/* HERO SECTION */}
      <section
        className="relative py-32"
        style={{ backgroundColor: "rgba(216, 135, 110, 0.06)" }}
      >
        <div
          className="absolute inset-0 bread-pattern"
          style={{
            backgroundColor: "#121212",
            backgroundImage: `
              radial-gradient(rgba(216, 135, 110, 1) 0.5px, transparent 0.5px),
              radial-gradient(rgba(216, 135, 110, 1) 0.5px, #121212 0.5px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
            opacity: 0.06,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <nav
            className="flex justify-center mb-6 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(255, 249, 240, 0.4)" }}
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition hover:text-[#d8876e]">
                  Home
                </Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
              </li>
              <li className="text-[#F5F5F5]">Menu</li>
            </ol>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight text-[#F5F5F5]">
            Our Menu
          </h1>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed italic text-[rgba(255,249,240,0.7)]">
            Freshly baked cakes and brownies, made with care using clean, eggless
            recipes — with sugar-free options for mindful indulgence.
          </p>
        </div>
      </section>

      {/* ========== MENU SECTION ========== */}
      <section className="px-6 lg:px-20 pb-24 py-28">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeFilter === filter
                  ? "bg-[#d8876e] text-black"
                  : "bg-[#1E1E1E] text-gray-300 hover:bg-[#2a2a2a]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                {item.tag && (
                  <span className="absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-[#d8876e] font-semibold">
                    Rs {item.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full bg-[#d8876e] text-black py-2 rounded-xl font-medium hover:opacity-90 transition"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛒 FLOATING CHECKOUT BAR */}
      {cart.length > 0 && (
        <div className="fixed bottom-32 right-6 bg-black text-white px-8 py-5 rounded-full shadow-xl flex items-center gap-4">
          <span className="font-semibold">
            {cart.reduce((sum, i) => sum + i.qty, 0)} items ready to checkout
          </span>
          <button
            onClick={goToCheckout}
            className="bg-black text-[#d8876e] px-4 py-1 rounded-full font-medium hover:opacity-80"
          >
            Go to Checkout →
          </button>
        </div>
      )}
    </div>
  );
}
