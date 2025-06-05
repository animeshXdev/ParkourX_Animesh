// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, Phone, Star } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Skills", path: "/skills", icon: <Star size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
  ];

  const navLinkClasses = ({ isActive }) =>
    `flex flex-col items-center justify-center gap-1 text-xs ${
      isActive ? "text-emerald-400" : "text-white"
    }`;

  return (
    <>
      {/* Top Logo + Desktop Menu */}
      <div className=" py-5 fixed top-0 left-0 w-full bg-black text-white px-4 z-50 shadow-md flex items-center justify-between">
        {/* Logo always on left */}
        <div className="text-3xl font-bold text-emerald-400">ParkourX</div>

        {/* Desktop Menu (on right) */}
        <ul className="hidden md:flex space-x-6 ">
          {navItems.map((item) => (
            <li  key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold hover:text-emerald-400 transition ${
                    isActive ? "text-emerald-400" : "text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Tab Bar (mobile only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-zinc-800 md:hidden">
        <ul className="flex justify-around items-center h-14">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} className={navLinkClasses}>
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
