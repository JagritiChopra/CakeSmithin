import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
 <footer className="bg-[#121212] text-[#a0a0a0] px-6 lg:px-20 py-12 font-display 
mt-0 border-[#372c2a]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Logo & description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* <span className="material-symbols-outlined text-[#e2715a] text-2xl">
              bakery_dining
            </span> */}
            <img   src="/logo.jpeg" className="h-10 w-10 object-cover"/>
            <h2 className="text-lg font-bold tracking-tight text-[#f5f5dc]">
              The CakeSmith
            </h2>
          </div>
          <p className="text-sm text-[#a0a0a0]/80 leading-relaxed">
            Redefining the neighborhood bakery with modern techniques and ancient traditions.
          </p>
          <div className="flex gap-2">
            <a className="w-8 h-8 rounded-full border border-[#372c2a] flex items-center justify-center hover:bg-[#e2715a] hover:text-white transition" href="#">
              <span className="material-symbols-outlined text-base">share</span>
            </a>
            <a className="w-8 h-8 rounded-full border border-[#372c2a] flex items-center justify-center hover:bg-[#e2715a] hover:text-white transition" href="#">
              <span className="material-symbols-outlined text-base">camera_alt</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold tracking-wider text-[#e2715a] uppercase">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm font-medium text-[#a0a0a0]/80">
           <li>
  <Link
    to="/menu"
    className="hover:text-[#e2715a] transition"
  >
    Our Menu
  </Link>
</li>

<li>
  <Link
    to="/checkout"
    className="hover:text-[#e2715a] transition"
  >
    Bulk Orders
  </Link>
</li>

<li>
  <Link
    to="/checkout"
    className="hover:text-[#e2715a] transition"
  >
    Gift Cards
  </Link>
</li>

<li>
  <Link
    to="/our-story"
    className="hover:text-[#e2715a] transition"
  >
    Our Story
  </Link>
</li>

<li>
  <Link
    to="/contact"
    className="hover:text-[#e2715a] transition"
  >
    Contact Us
  </Link>
</li>

          </ul>
        </div>

        {/* Opening Hours */}
        <div className="space-y-1">
  <h4 className="text-xs font-bold tracking-wider text-[#e2715a] uppercase">
    Opening Hours
  </h4>

  <div className="text-sm font-medium text-[#a0a0a0]/80 space-y-0.5">
    <div className="flex items-center gap-4">
      <span>Monday – Friday</span>
      <span>10 AM – 7 PM</span>
    </div>

    <div className="flex items-center gap-4">
      <span>Saturday – Sunday</span>
      <span>Closed</span>
    </div>
  </div>
</div>


        {/* Visit Us */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold tracking-wider text-[#e2715a] uppercase">
            Visit Us
          </h4>
          <p className="text-sm font-medium text-[#a0a0a0]/80">
            Swastik Enclave ,<br />
            Ludhiana 141007, Punjab
          </p>
          <a href="#" className="text-sm font-semibold text-[#e2715a] hover:underline">
            Get Directions
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-[#372c2a] flex flex-col sm:flex-row justify-between items-center text-xs text-[#a0a0a0]/50">
        <p>© 2026  The CakeSmith. All rights reserved.</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="#" className="hover:text-[#e2715a] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#e2715a] transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
