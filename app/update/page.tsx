"use client";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { toast } from "sonner";

const UpdateData = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      setLoading(true);
      const resJson = await fetch("/api/update_by_file", {
        method: "POST",
        body: data,
      });
      console.log("resJson.status ", resJson.status);
      if (resJson.status == 200) {
        toast.success("Berhasil mengupdate data pohon!", {
          duration: 2500,
        });
      } else {
        const errorMessage = await resJson.text();
        throw new Error(errorMessage);
      }
      setLoading(false);
    } catch (error: any) {
      return toast.error(error.message, {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <div
        id="main"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap justify-center items-center max-sm:w-11/12"
          encType="multipart/form-data"
        >
          <div className="mb-6 flex flex-col w-full relative text-center font-bold text-xl">
            Pembaruan data pohon melalui file
          </div>
          <div className="mb-6 flex flex-col w-full relative">
            <label htmlFor="file" className="mb-1">
              Unggah dokumen (.xlsx)
            </label>
            <input
              type="file"
              accept="application/xlsx"
              className="  border-2 rounded-xl border-lime-950 focus:outline-none file:focus:ring file:transition-all  
            file:mr-4 file:py-2 file:px-4
             file:border-0
            file:text-sm file:font-semibold
            file:bg-lime-950 file:text-lime-50 hover:ring-lime-700 hover:ring
            cursor-pointer
            "
              name="file"
              required
            />
          </div>
          <button className=" py-2 w-full bg-lime-950 text-lime-50 hover:ring hover:ring-lime-700 rounded-lg self-start focus:outline-none focus:ring focus:ring-lime-950 focus:bg-lime-50 focus:text-lime-950 transition">
            Simpan
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateData;
