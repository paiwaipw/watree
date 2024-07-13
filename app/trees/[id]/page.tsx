"use client";
import { fetchOneTree } from "@/app/components/FetchTree";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";
import { FlowrateChart, SoilChart } from "./LineChart";
import dayjs from "dayjs";

const PlotPage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(false);
  const [treeData, setTreeData]: any = useState({});
  const fetchData = async () => {
    const tree = await fetchOneTree(params.id);
    if (tree) {
      console.log(tree);
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
          <div className="font-bold">Data for {params.id}</div>
          <div className="flex px-2 h-[20rem] w-full">
            {treeData && <FlowrateChart treeData={treeData} />}
          </div>
          <div className="flex px-2 h-[20rem] w-full">
            {treeData && <SoilChart treeData={treeData} />}
          </div>
          <div className="flex flex-col rounded-xl py-2 px-4  bg-lime-50 shadow-md hover:shadow-xl transition-all max-w-[95%] max-sm:min-w-[80%]">
            <div className="text-center font-bold text-lime-950 py-2">
              Latest Data
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
              <span className="w-24 flex shrink-0">Chan </span>
              <span className="mx-1">:</span>
              <span className=" mx-1">
                <span className="font-semibold">
                  {treeData.progress[treeData.progress.length - 1].chan}
                </span>{" "}
              </span>
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Date </span>
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
              <span className="w-24 flex shrink-0">Time </span>
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
              <span className="w-24 flex shrink-0">Position</span>
              <span className="mx-1">:</span>
              <span className=" mx-1">-</span>
            </div>
            <div className="flex flex-row justify-start">
              <span className="w-24 flex shrink-0">Additional Information</span>
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
