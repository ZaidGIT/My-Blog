import React, { useEffect, useState } from "react";
import { LuSun, LuMoon, LuMenu, LuX } from "react-icons/lu";
import '../assets/_common/navbar.css'

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="right-container">
        <div className="burger" onClick={toggleMenu}>
          {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/archives">Archives</a></li>
          <li><a href="/tags">Tags</a></li>
          <li><a href="/links">Links</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <div onClick={toggleTheme} className="theme-icon">
          {theme === "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
