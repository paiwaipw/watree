"use client";
import { fetchOneTree } from "@/app/components/FetchTree";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";
import { FlowrateChart, SoilChart } from "./LineChart";
import dayjs from "dayjs";
import Link from "next/link";

const PlotPage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(false);
  const [treeData, setTreeData]: any = useState({});

  const fetchData = async () => {
    const tree = await fetchOneTree(params.id);
    if (tree) {
      setTreeData(tree);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (treeData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [treeData]);
  if (loading) {
    return <Loading />;
  }
  if (treeData.progress) {
    return (
      <>
        <Header />
        <div
          id="main"
          className="min-h-screen flex flex-col items-center justify-center gap-5 pt-24 pb-10"
        >
          <Link
            href={"/"}
            className="self-start ms-5 font-medium text-md rounded-md bg-[#284A0B] transition-all text-white py-1 px-4 hover:bg-[#284A0B]/80 focus:ring focus:ring-[#284A0B]/30 focus:bg-[#284A0B]/10 focus:text-[#284A0B] "
          >
            Kembali
          </Link>
          <div className="text-center">
            <div className="font-bold">Data untuk {params.id}</div>
            <div className="font-semibold">
              <span className="italic">{treeData.spesies_latin}</span> (
              {treeData.spesies_lokal})
            </div>
          </div>
          <div className="flex px-2 h-[20rem] w-full">
            {treeData && <FlowrateChart treeData={treeData} />}
          </div>
          {/* <div className="flex px-2 h-[20rem] w-full">
            {treeData && <SoilChart treeData={treeData} />}
          </div> */}
          <div className="flex flex-col rounded-xl py-2 px-4  bg-[#284A0B]/5 shadow-md hover:shadow-xl transition-all max-w-[95%] max-sm:min-w-[80%]">
            <div className="text-center font-bold text-lime-950 py-2">
              Detail Data Terbaru
            </div>
            <div className="flex flex-row justify-start items-center">
              <span className="w-24 flex shrink-0">Status</span>
              <span className="mx-1">:</span>
              {treeData.status === "Hidup" && (
                <span className="text-sm mx-1 bg-green-400 py-0.5 px-2 rounded-md">
                  Hidup
                </span>
              )}
              {treeData.status === "Kritis" && (
                <span className="text-sm mx-1 bg-yellow-400 py-0.5 px-2 rounded-md">
                  Kritis
                </span>
              )}
              {treeData.status === "Mati" && (
                <span className="text-sm mx-1 bg-red-400 py-0.5 px-2 rounded-md">
                  Mati
                </span>
              )}
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Latitude</span>
              <span className="mx-1">:</span>
              <span className=" mx-1">{treeData.latitude}</span>
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Longitude</span>
              <span className="mx-1">:</span>
              <span className=" mx-1">{treeData.longitude}</span>
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Flow Rate </span>
              <span className="mx-1">:</span>
              <span className=" mx-1">
                <span className="font-semibold">
                  {treeData.progress[treeData.progress.length - 1].flowrate}
                </span>{" "}
                cm/hr
              </span>
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Tanggal </span>
              <span className="mx-1">:</span>
              <span className=" mx-1">
                {dayjs(
                  treeData.progress[
                    treeData.progress.length - 1
                  ].timestamp.toString()
                ).format("DD/MM/YYYY")}
              </span>
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Waktu </span>
              <span className="mx-1">:</span>
              <span className=" mx-1">
                {dayjs(
                  treeData.progress[
                    treeData.progress.length - 1
                  ].timestamp.toString()
                ).format("HH:mm:ss")}
              </span>
            </div>

            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Informasi Tambahan</span>
              <span className="mx-1">:</span>
              <span className=" mx-1">-</span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default PlotPage;
