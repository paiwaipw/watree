import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Header />
      <div id="main" className="min-h-screen flex pt-20 flex-col items-center">
        <Link
          href={"/"}
          className="self-start ms-5 mt-10 font-medium text-md rounded-md bg-[#284A0B] transition-all text-white py-1 px-4 hover:bg-[#284A0B]/80 focus:ring focus:ring-[#284A0B]/30 focus:bg-[#284A0B]/10 focus:text-[#284A0B] "
        >
          Kembali
        </Link>
        <div className="flex flex-col w-full min-h-screen gap-5 sm:gap-10 pb-10">
          <div className="mt-10 mb- text-center font-bold uppercase text-lg lumut-col">
            Tim WaTree
          </div>
          <div className="flex sm:flex-row flex-col w-full justify-start gap-5 px-10">
            <div className="flex flex-col items-center gap-3 min-w-64">
              <img src="/about/8.png" className="w-36" alt="" />
              <div className="bg-[#284A0B]/10 font-medium lumut-col py-0.5 px-3 shadow-md rounded-full text-sm">
                Dosen Pendamping
              </div>
              <div className="lumut-col text-center uppercase font-semibold">
                <div className="">Dr. Endah Sulistyawati,</div>
                <div>S.Si., Ph.D</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 min-w-64">
              <img src="/about/9.png" className="w-36" alt="" />
              <div className="bg-[#284A0B]/10 font-medium lumut-col py-0.5 px-3 shadow-md rounded-full text-sm">
                Ketua
              </div>
              <div className="lumut-col text-center">
                <div className="uppercase font-semibold">
                  ZAHRAH FARIDATHUL ATHIFAH
                </div>
                <div className="text-sm">Rekayasa Kehutanan</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 min-w-64">
              <img src="/about/10.png" className="w-36" alt="" />
              <div className="bg-[#284A0B]/10 font-medium lumut-col py-0.5 px-3 shadow-md rounded-full text-sm">
                Anggota 1
              </div>
              <div className="lumut-col text-center">
                <div className="uppercase font-semibold">TAUFIK SYAHPUTRA</div>
                <div className="text-sm">Teknik Fisika</div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col w-full justify-end gap-5 px-10">
            <div className="flex flex-col items-center gap-3 min-w-64">
              <img src="/about/11.png" className="w-36" alt="" />
              <div className="bg-[#284A0B]/10 font-medium lumut-col py-0.5 px-3 shadow-md rounded-full text-sm">
                Anggota 2
              </div>
              <div className="lumut-col text-center">
                <div className="uppercase font-semibold">
                  MOCH. AGUNG PRASETYO WIBOWO
                </div>
                <div className="text-sm">Teknik Geodesi dan Geomatika</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 min-w-64">
              <img src="/about/12.png" className="w-36" alt="" />
              <div className="bg-[#284A0B]/10 font-medium lumut-col py-0.5 px-3 shadow-md rounded-full text-sm">
                Anggota 3
              </div>
              <div className="lumut-col text-center">
                <div className="uppercase font-semibold">SANG ARA MUSTHIKA</div>
                <div className="text-sm">Rekayasa Kehutanan</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 min-w-64">
              <img src="/about/13.png" className="w-36" alt="" />
              <div className="bg-[#284A0B]/10 font-medium lumut-col py-0.5 px-3 shadow-md rounded-full text-sm">
                Anggota 4
              </div>
              <div className="lumut-col text-center">
                <div className="uppercase font-semibold">
                  HALIZA QINTAR MA’AYA
                </div>
                <div className="text-sm">Rekayasa Kehutanan</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full py-10 bg-[#284a0b]/5 lumut-col text-justify sm:px-20 px-10">
          <div className=" mb-7 font-bold uppercase text-lg lumut-col text-center">
            Visi
          </div>
          <div>
            <span className="font-bold">Lokal : </span>Menjadi solusi terdepan
            dalam pemantauan dan peningkatan keberhasilan penanaman pohon di
            lingkungan setempat, mendukung kelestarian hutan dan memperbaiki
            kualitas udara lokal.
          </div>
          <div>
            <span className="font-bold">Nasional : </span>Memperkuat inisiatif
            nasional dalam reforestasi dan rehabilitasi lahan kritis dengan
            teknologi canggih yang mampu meningkatkan efektivitas pemantauan dan
            penanganan tanaman secara real-time.
          </div>
          <div>
            <span className="font-bold">Global : </span>Berkontribusi pada usaha
            global dalam mitigasi perubahan iklim dan konservasi keanekaragaman
            hayati melalui inovasi teknologi yang mendukung keberlanjutan hutan
            di seluruh dunia.
          </div>
        </div>
        <div className="flex flex-col w-full py-10 lumut-col text-justify sm:px-20 px-10 text-base">
          <div className="mb-7 font-bold uppercase text-lg lumut-col text-center">
            Misi
          </div>
          <div className="mb-3">
            <div className="font-bold">Lokal : </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Mengimplementasikan sistem WaTree di berbagai lokasi hutan lokal
                untuk memantau daya hidup pohon secara efisien.
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Mendukung program penghijauan lokal dengan data yang akurat
                untuk meningkatkan keberhasilan penanaman.
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-bold">Nasional : </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Berkolaborasi dengan pemerintah dan lembaga terkait untuk
                mengintegrasikan WaTree dalam program nasional reforestasi dan
                konservasi hutan.
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Meningkatkan kapasitas produksi dan distribusi WaTree agar dapat
                diterapkan di seluruh wilayah Indonesia.
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Mengembangkan platform pemantauan berbasis IoT yang dapat
                diakses oleh berbagai pihak untuk meningkatkan transparansi dan
                koordinasi dalam program penghijauan.
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-bold">Global : </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Menyediakan solusi pemantauan tanaman yang dapat diadopsi oleh
                berbagai negara untuk mendukung program reforestasi dan mitigasi
                perubahan iklim.
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Berpartisipasi dalam forum internasional terkait lingkungan dan
                teknologi untuk berbagi pengetahuan dan inovasi dalam pemantauan
                daya hidup tanaman.
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-extrabold me-2">&bull;</div>
              <div>
                Menggandeng organisasi internasional untuk memperluas penerapan
                teknologi WaTree dalam skala global, mendukung inisiatif global
                dalam pelestarian hutan dan keanekaragaman hayati.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
