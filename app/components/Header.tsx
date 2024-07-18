"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check on page load
    handleResize();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`flex items-center justify-between w-full bg-[#e9ede6]/70 shadow-md fixed top-0 left-0 right-0 px-7 font-semibold text-lime-900 transition-all duration-300 backdrop-blur-md z-50 ${
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
      {isHomePage && (
        <>
          {isMobile ? (
            <div onClick={toggleMenu} className="cursor-pointer">
              <div className="w-6 h-0.5 bg-lime-900 mb-1"></div>
              <div className="w-6 h-0.5 bg-lime-900 mb-1"></div>
              <div className="w-6 h-0.5 bg-lime-900"></div>
            </div>
          ) : (
            <div className="flex flex-row gap-4">
              <Link
                className="text-sm flex px-1 border-b-2 border-[#284a0b00] hover:border-[#284a0b] transition-all lumut-col"
                href={"#about"}
              >
                TENTANG KAMI
              </Link>
              <Link
                className="text-sm flex px-1 border-b-2 border-[#284a0b00] hover:border-[#284a0b] transition-all lumut-col"
                href={"#metodologi"}
              >
                METODOLOGI
              </Link>
              <Link
                className="text-sm flex px-1 border-b-2 border-[#284a0b00] hover:border-[#284a0b] transition-all lumut-col"
                href={"#mapbox"}
              >
                MAP
              </Link>
            </div>
          )}
        </>
      )}
      {menuOpen && isMobile && (
        <div className="absolute top-16 right-0 bg-[#e9ede6] shadow-md p-4 rounded-lg">
          <Link
            className="block text-sm py-2 border-b border-[#284a0b00] hover:border-[#284a0b] transition-all lumut-col"
            href={"#about"}
            onClick={toggleMenu}
          >
            TENTANG KAMI
          </Link>
          <Link
            className="block text-sm py-2 border-b border-[#284a0b00] hover:border-[#284a0b] transition-all lumut-col"
            href={"#metodologi"}
            onClick={toggleMenu}
          >
            METODOLOGI
          </Link>
          <Link
            className="block text-sm py-2 border-b border-[#284a0b00] hover:border-[#284a0b] transition-all lumut-col"
            href={"#mapbox"}
            onClick={toggleMenu}
          >
            MAP
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
