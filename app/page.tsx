"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Mapbox from "./components/Mapbox";
import { fetchAllTrees } from "./components/FetchTree";
import Loading from "./loading";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [treesData, setTreesData]: any = useState({});
  const fetchData = async () => {
    const trees = await fetchAllTrees();
    if (trees) {
      console.log(trees);
      setTreesData(trees);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (treesData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [treesData]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <div id="main" className="min-h-screen flex flex-col items-center">
        <div
          id="screen_1"
          className="flex flex-col items-center justify-center w-full h-screen object-cover text-white"
        >
          <img src="/watree_grown.svg" className="mt-10" alt="" />
          <div className="tracking-[.40em] sm:tracking-[.60em]">
            TEKNOLOGI BERSINERGI
          </div>
          <div className="tracking-[.40em] sm:tracking-[.60em]">
            HUTAN TERLINDUNGI
          </div>
        </div>
        <div
          id="about"
          className="flex flex-col px-4 gap-10 sm:text-center text-justify justify-center items-center h-[60vh] lumut-col"
        >
          <div className="text-center font-bold text-lg tracking-wide uppercase">
            Tentang Kami
          </div>
          <div className="sm:w-9/12 font-medium">
            WaTree adalah sistem yang dapat mendeteksi daya hidup pohon secara
            remote dan real-time sehingga pertumbuhan tanaman dapat diketahui
            tanpa harus turun ke lapangan dan data bisa didapatkan secara cepat,
            sehingga solusi berupa penyulaman/perlakuan dalam rangka mencapai
            keberhasilan penanaman dapat dilakukan secara terencana dan berkala.
          </div>
          <Link
            href={"/about"}
            className="text-center font-medium text-md rounded-md bg-[#284A0B] transition-all text-white py-1 px-4 hover:bg-[#284A0B]/80 focus:ring focus:ring-[#284A0B]/30 focus:bg-[#284A0B]/10 focus:text-[#284A0B]"
          >
            Selengkapnya
          </Link>
        </div>
        <div
          id="metodologi"
          className="flex flex-col px-4 gap-4 text-center justify-center items-center h-[50vh] bg-[#284A0B]/5 w-full "
        >
          <div className="text-center font-bold text-lg tracking-wide uppercase lumut-col mb-3">
            Metodologi
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-5">
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
            <img src="/trees.svg" className="w-12 sm:w-20" alt="" />
          </div>
        </div>
        <Link
          href={"/update"}
          className="text-center font-medium text-md rounded-md bg-[#284A0B] transition-all text-white py-1 px-4 hover:bg-[#284A0B]/80 focus:ring focus:ring-[#284A0B]/30 focus:bg-[#284A0B]/10 focus:text-[#284A0B] mt-10"
        >
          Update Data
        </Link>
        <div
          id="mapbox"
          className="w-full flex flex-col justify-center items-center gap-10 py-10"
        >
          <div className="text-center font-bold text-md tracking-wide uppercase lumut-col">
            <div>Area Pengamatan </div>
            <div>Pohon Terintragasi Sistem WATREE</div>
          </div>
          <div className="w-[95%] sm:w-[60%] h-[15rem] sm:h-[22rem] shadow-lg rounded-lg overflow-hidden">
            <Mapbox trees={treesData} />
          </div>
          <div className="flex flex-col items-center justify-center lumut-col">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right lumut-col min-w-96">
                <thead className="text-xs lumut-col text-center uppercase bg-[#284A0B]/5 ">
                  <tr>
                    <th
                      scope="col"
                      colSpan={2}
                      className="px-6 py-3 text-center font-bold text-sm"
                    >
                      Data Pengamatan
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Spesies
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-center hover:bg-gray-50 transition-all">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium lumut-col whitespace-nowrap "
                    >
                      Merbau
                    </th>
                    <td className="px-6 py-4 ">2 Bibit</td>
                  </tr>
                  <tr className="bg-white border-b text-center  hover:bg-gray-50 transition-all">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  lumut-col whitespace-nowrap "
                    >
                      Sengon
                    </th>
                    <td className="px-6 py-4 ">3 Bibit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
