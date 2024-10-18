"use client";
import { useEffect, useState } from "react";
import { GiMoon } from "react-icons/gi";
import { LuSun } from "react-icons/lu";

export default function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    // Set dark mode based on user preference or system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className=" flex items-center justify-center ">
      <button onClick={toggleDarkMode} className="p-2 h-12 w-auto rounded-full">
        {isDarkMode ? (
          <LuSun size="lg" className="text-white" />
        ) : (
          <GiMoon size="lg" />
        )}
      </button>
    </div>
  );
}
