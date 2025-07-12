import React, { useEffect, useState } from "react";
import {LuSun, LuMoon} from "react-icons/lu";


const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
<nav style={styles.navbar}>
  <div style={styles.rightContainer}>
    <ul style={styles.navLinks}>
      <li><a href="/" style={styles.link}>Home</a></li>
      <li><a href="/archives" style={styles.link}>Archives</a></li>
      <li><a href="/tags" style={styles.link}>Tags</a></li>
      <li><a href="/links" style={styles.link}>Links</a></li>
      <li><a href="/about" style={styles.link}>About</a></li>
    </ul>
    <div onClick={toggleTheme} style={styles.icon}>
      {theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
    </div>
  </div>
</nav>

  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "var(--color-bg)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    border: "none",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    cursor: "pointer",
    color: "var(--color-text)",
    textDecoration: "none",
    fontSize: "1.1rem",
    position: "relative",
    transition: "color 0.3s ease",
  },  
  icon: {
    color: "var(--color-text)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
};

export default Navbar;
