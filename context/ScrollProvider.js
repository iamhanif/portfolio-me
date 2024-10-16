"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollBgColor, setScrollBgColor] = useState("bg-white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Change the background color based on scroll position
      if (scrollPosition < 300) {
        setScrollBgColor("bg-white");
      } else if (scrollPosition < 600) {
        setScrollBgColor("bg-green-200");
      } else {
        setScrollBgColor("bg-green-500");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollBgColor }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
