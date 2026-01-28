// import { Link, NavLink } from "react-router-dom";
// import { useTheme } from "../context/useTheme";

// const Navbar = () => {
//   return (
//     <header className="bg-cream h-20 px-20 flex items-center justify-between">
      
//       {/* Logo */}
//       <div className="flex items-center gap-2 font-bold tracking-wide">
//         <span className="text-lg">🍞</span>
//         <span className="text-sm">THE GOLDEN CRUST</span>
//       </div>

//       {/* Menu */}
//       <nav className="flex gap-8 text-sm">
//         <NavLink to="/menu" className="hover:text-primary">
//           Menu
//         </NavLink>
//         <NavLink to="/our-story" className="hover:text-primary">
//           Our Story
//         </NavLink>
//         <NavLink to="/wholesale" className="hover:text-primary text-purple">
//           Wholesale
//         </NavLink>
//         <NavLink to="/contact" className="hover:text-primary">
//           Contact
//         </NavLink>
//       </nav>

//       {/* CTA */}
//      <Link
//   to="/checkout"
//  className="bg-[#d8876e] hover:bg-[#d8876e]/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-[#d8876e]/20 transition-all active:scale-95"
// > Order now
// </Link>


//     </header>
//   );
// };

// export default Navbar;



import { Link, NavLink } from "react-router-dom";
//import { useTheme } from "../context/useTheme";

const Navbar = () => {
 // const { theme, toggleTheme } = useTheme(); // 👈 ADD THIS

  return (
    <header className="bg-cream dark:bg-[#121212] h-20 px-20 flex items-center justify-between transition-colors">
      
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold tracking-wide dark:text-white">
        <span className="text-lg">🍞</span>
        <span className="text-sm">THE CakeSmith</span>
      </div>

      {/* Menu */}
      <nav className="flex gap-8 text-sm dark:text-[#F5F5F5]">
        <NavLink to="/menu" className="hover:text-primary">
          Menu
        </NavLink>
        <NavLink to="/our-story" className="hover:text-primary">
          Our Story
        </NavLink>
        <NavLink to="/join-us" className="hover:text-primary">
          Join Us
        </NavLink>
        <NavLink to="/contact" className="hover:text-primary">
          Contact
        </NavLink>
      </nav>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        
        {/* 🌙 Theme Toggle Button */}
        {/* <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-lg transition hover:scale-110 dark:text-white"
          title="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button> */}

        {/* CTA */}
        <Link
          to="/menu"
          className="bg-[#d8876e] hover:bg-[#d8876e]/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-[#d8876e]/20 transition-all active:scale-95"
        >
          Order now
        </Link>

      </div>
    </header>
  );
};

export default Navbar;
