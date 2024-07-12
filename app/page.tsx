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
      <div
        id="main"
        className="min-h-screen pt-24 pb-10 flex flex-col items-center"
      >
        <div className="flex flex-col px-4 gap-6 text-justify items-center">
          <img src="/tall_tree.svg" className="h-40 my-3" alt="" />
          <div className="my-5">
            <div className="text-center font-bold text-lg mb-6">About Us</div>
            <div>
              WaTree is Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quidem officia totam ducimus, natus tempora exercitationem
              commodi quia facilis a quis excepturi sapiente vitae, id nam odio
              eaque ipsum porro veniam.
            </div>
          </div>
          <Link
            href={"/update"}
            className="my-6 flex  bg-lime-950 text-lime-50 hover:ring hover:ring-gray-300 hover:bg-lime-900 focus:bg-lime-50 focus:text-lime-950 focus:ring-lime-950 transition-all rounded-xl py-2 px-5"
          >
            Update Data
          </Link>
          <div className=" w-[50rem]">
            <Mapbox trees={treesData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
