"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center w-full bg-lime-500 fixed top-0 left-0 right-0 px-7 font-semibold text-green-950 transition-all duration-300 ${
        isScrolled ? "py-2 text-md" : "py-5 text-lg"
      }`}
    >
      <span>WaTree</span>
    </div>
  );
};

export default Header;
