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
      const resJson = await fetch("/api/jadwal", {
        method: "POST",
        body: data,
      });
      if (resJson.status == 201) {
        toast.success("Berhasil membuat jadwal!", {
          duration: 2500,
        });
      } else {
        const errorMessage = await resJson.text();
        throw new Error(errorMessage);
      }
      setLoading(false);
      window.location.reload();
      window.location.href = "/";
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
            Pembaruan data pohon
          </div>
          <div className="mb-6 flex flex-col w-full relative">
            <label htmlFor="file" className="mb-1">
              Unggah dokumen (.csv)
            </label>
            <input
              type="file"
              accept="application/csv"
              className="  border-2 rounded-xl border-lime-500 focus:outline-none file:focus:ring file:transition-all  
            file:mr-4 file:py-2 file:px-4
             file:border-0
            file:text-sm file:font-semibold
            file:bg-lime-500 file:text-gray-900 hover:file:bg-lime-700
            cursor-pointer
            "
              name="file"
              required
            />
          </div>
          <button className=" py-2 w-full bg-lime-500 text-gray-900 hover:ring hover:ring-lime-300 rounded-lg self-start focus:outline-none focus:ring focus:ring-lime-300 focus:bg-lime-400 transition">
            Simpan
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateData;
