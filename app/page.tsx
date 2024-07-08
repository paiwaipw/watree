import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div
        id="main"
        className="min-h-screen mt-[4.5rem] flex flex-col items-center"
      ></div>
      <Footer />
    </>
  );
};

export default HomePage;
