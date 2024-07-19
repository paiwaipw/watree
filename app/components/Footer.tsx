import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col px-4 gap-2 sm:gap-4 text-justify justify-center items-center py-5 sm:py-10 w-full bg-[#284A0B]/5 lumut-col">
      <div className="uppercase text-sm font-bold">Didukung Oleh :</div>
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-14">
        <img src="/kemdikbud.svg" className="w-8 sm:w-20" alt="" />
        <img src="/km.svg" className="w-12 sm:w-24" alt="" />
        <img src="/pkm.svg" className="w-12 sm:w-32" alt="" />
        <img src="/simbelmawa.svg" className="w-16 sm:w-32" alt="" />
        <img src="/itb.svg" className="w-8 sm:w-20" alt="" />
      </div>
    </div>
    // <div className="bg-lime-950 py-5 px-5 font-semibold text-white">
    //   &copy; WaTree
    // </div>
  );
};

export default Footer;
