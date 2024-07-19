"use client";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { toast } from "sonner";
import dayjs from "dayjs";
import Link from "next/link";

const UpdateData = () => {
  const [loading, setLoading] = useState(true);
  const [previousFiles, setPreviousFiles] = useState<any>([]);
  const fetchPreviouslyUploadedFiles = async () => {
    const res = await fetch("/api/update_by_file", {
      method: "GET",
    });
    if (res.status === 200) {
      const fetchedFiles = await res.json();
      setPreviousFiles(fetchedFiles);
    } else {
      toast.error("Gagal Mendapatkan File Terdahulu!", { duration: 5000 });
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPreviouslyUploadedFiles();
  }, []);
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
        window.location.reload();
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
        duration: 6000,
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
        className="min-h-screen flex flex-col items-center gap-5 pt-20 lumut-col"
      >
        <Link
          href={"/"}
          className="self-start ms-5 mt-10 font-medium text-md rounded-md bg-[#284A0B] transition-all text-white py-1 px-4 hover:bg-[#284A0B]/80 focus:ring focus:ring-[#284A0B]/30 focus:bg-[#284A0B]/10 focus:text-[#284A0B] "
        >
          Kembali
        </Link>
        <div className="mb-4 flex flex-col w-full relative text-center font-bold text-lg uppercase ">
          Pembaruan data pohon melalui file
        </div>
        <div className="mb-4 bg-[rgb(247,254,230,0.5)] px-2 py-4 rounded-lg shadow-md">
          <div className="text-center">Unduh file Terdahulu:</div>
          {previousFiles.map((file: any, index: number) => {
            if (index === 0) {
              return (
                <div
                  key={`files_${index}`}
                  className="flex flex-row justify-between items-center gap-4 my-1 shadow-md rounded-lg bg-lime-50  px-2 py-2 text-sm "
                >
                  <div className="flex flex-row items-center gap-1">
                    <div className="text-sm">
                      Waktu unggah :{" "}
                      {dayjs(file.uploaded).format("DD/MM/YYYY - HH:mm:ss")}
                    </div>
                  </div>
                  <Link
                    href={file.excelUrl}
                    className="hover:ring rounded-md hover:ring-lime-900 transition-all"
                  >
                    <img
                      src="/download.svg"
                      className="w-10 p-1.5 bg-lime-950 text-white  shadow-xl rounded-md"
                      alt=""
                    />
                  </Link>
                </div>
              );
            } else {
              return (
                <div
                  key={`files_${index}`}
                  className="flex flex-row justify-center items-center gap-1 my-2 "
                >
                  <div className="text-xs">
                    Versi sebelumnya :{" "}
                    {dayjs(file.uploaded).format("DD/MM/YYYY - HH:mm:ss")}
                  </div>
                  <Link href={file.excelUrl}>
                    <img
                      src="/download.svg"
                      className="w-7 p-1.5 bg-lime-950 text-white  shadow-xl rounded-md hover:ring hover:ring-lime-900 transition-all"
                      alt=""
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap justify-center items-center max-sm:w-11/12"
          encType="multipart/form-data"
        >
          <div className="mb-4 flex flex-col w-full relative">
            <label htmlFor="file" className="mb-1 text-sm">
              Unggah dokumen (.xlsx)
            </label>
            <input
              type="file"
              accept="application/xlsx"
              className="  border-2 rounded-lg border-lime-950 focus:outline-none file:focus:ring file:transition-all  
            file:mr-4 file:py-2 file:px-4
             file:border-0
            file:text-sm file:font-semibold
            file:bg-lime-950 file:text-lime-50 hover:ring-gray-300 hover:ring transition-all
            cursor-pointer
            "
              name="file"
              required
            />
          </div>
          <button className=" py-2 w-full bg-lime-950 text-lime-50 hover:ring hover:ring-gray-300 rounded-lg self-start focus:outline-none focus:ring focus:ring-lime-950 focus:bg-lime-50 focus:text-lime-950 transition my-6">
            Simpan
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateData;
