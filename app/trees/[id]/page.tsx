"use client";
import { fetchOneTree } from "@/app/components/FetchTree";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";
import { LineChart } from "./LineChart";

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
          className="min-h-screen flex flex-col items-center justify-center gap-5"
        >
          <div className="font-bold">Data for {params.id}</div>
          <div className="flex px-2 h-72 w-full">
            {treeData && <LineChart treeData={treeData} />}
          </div>
          <div className="border-2 rounded-xl py-2 px-4 border-lime-400">
            <div>
              Latest Flow Rate :{" "}
              <span className="font-semibold">
                {treeData.progress[treeData.progress.length - 1].flowrate}
              </span>{" "}
              cm/hr
            </div>
            <div>Position : -</div>
            <div>Additional Information : -</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default PlotPage;
