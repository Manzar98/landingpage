import React, { useState } from "react";
import { Settings } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", className: "text-purple-200 hover:text-white transition-colors duration-200" },
  { name: "Features", href: "#", className: "hover:text-purple-200 transition-colors duration-200 font-medium" },
  { name: "Pricing", href: "#", className: "hover:text-purple-200 transition-colors duration-200 font-medium" },
  { name: "Blog", href: "#", className: "hover:text-purple-200 transition-colors duration-200 font-medium" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-center pt-8 pb-4">
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-8 text-white">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className={link.className}>
            {link.name}
          </a>
        ))}
        <Settings className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition-colors duration-200" />
        <span className="font-bold text-xl">Be</span>
      </div>
      {/* Mobile/Tablet */}
      <div className="flex md:hidden w-full justify-between items-center px-4">
        <span className="font-bold text-xl text-white">Be</span>
        <button
          className="text-white focus:outline-none bg-transparent"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-br from-purple-500 via-blue-200 to-indigo-800 shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block text-white text-lg" onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <Settings className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition-colors duration-200" />
        </div>
      )}
    </nav>
  );
} 