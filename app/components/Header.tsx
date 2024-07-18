"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`flex items-center w-full bg-[#e9ede6]/70 shadow-md fixed top-0 left-0 right-0 px-7 font-semibold text-lime-900 transition-all duration-300 backdrop-blur-md z-50 ${
        isScrolled ? "py-2 text-md" : "py-5 text-lg"
      }`}
    >
      <Link href={"/"} className="flex flex-row items-center gap-0.5">
        <img
          src="/trees.svg"
          className={`transition-all duration-300 ${
            isScrolled ? "w-6" : "w-10"
          }`}
          alt=""
        />
        <div className="leading-10">WaTree</div>
      </Link>
    </div>
  );
};

export default Header;
