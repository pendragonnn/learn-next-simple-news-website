"use client";

import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Update DOM + save theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "");
    }
  }, [isDark]);

  return (
    <button
      id="theme-switcher"
      className="theme-switcher"
      onClick={() => setIsDark(!isDark)}
    >
      Change Theme
    </button>
  );
}

export default ThemeSwitcher;
