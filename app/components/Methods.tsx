import React from "react";

const Methods = () => {
  return (
    <>
      <div className="text-center font-bold text-lg tracking-wide uppercase lumut-col mb-3">
        Metodologi
      </div>
      <div className="flex sm:flex-row sm:flex-wrap flex-col sm:items-start items-center justify-center gap-1 sm:gap-2">
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/thermocouple.png"
            className="w-16 sm:w-28 mb-2"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">Thermocouple</div>
          <div className="leading-tight text-sm max-sm:text-xs">
            Sensor untuk mendeteksi aliran panas pada tumbuhan
          </div>
        </div>
        <img
          src="/metodologi/arrow.png"
          className="w-12 sm:w-14 self-center max-sm:rotate-90"
          alt=""
        />
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/penguat.png"
            className="w-16 sm:w-28 mb-2"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">
            Rangkaian Penguat
          </div>
          <div className="leading-tight text-sm max-sm:text-xs">
            Mengolah sinyal dari sensor agar sesuai dan dapat diolah oleh
            microcontroller
          </div>
        </div>
        <img
          src="/metodologi/arrow.png"
          className="w-12 sm:w-14 self-center max-sm:rotate-90"
          alt=""
        />
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/esp32.png"
            className="w-16 sm:w-28 mb-2"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">ESP32</div>
          <div className="leading-tight text-sm max-sm:text-xs">
            Microcontroller untuk mengolah sinyal
          </div>
        </div>
        <img
          src="/metodologi/arrow.png"
          className="w-12 sm:w-14 self-center max-sm:rotate-90"
          alt=""
        />
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/data_flow_rate.png"
            className="w-16 sm:w-28 mb-2"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">
            Data Flow Rate
          </div>
          <div className="leading-tight text-sm max-sm:text-xs">
            Volumetric flow rate
          </div>
        </div>
        <img
          src="/metodologi/arrow.png"
          className="w-12 sm:w-14 self-center max-sm:rotate-90"
          alt=""
        />
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/cloud-server.svg"
            className="w-16 sm:w-28"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">
            Backend Server
          </div>
          <div className="leading-tight text-sm max-sm:text-xs">
            Penerima dan pemroses data
          </div>
        </div>
        <img
          src="/metodologi/arrow.png"
          className="w-12 sm:w-14 self-center max-sm:rotate-90"
          alt=""
        />
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/cloud-database.svg"
            className="w-16 sm:w-28 mb-2"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">Database</div>
          <div className="leading-tight text-sm max-sm:text-xs">
            Penyimpanan data
          </div>
        </div>
        <img
          src="/metodologi/arrow.png"
          className="w-12 sm:w-14 self-center max-sm:rotate-90"
          alt=""
        />
        <div className="flex flex-col max-w-[90%] sm:max-w-40 items-center justify-start">
          <img
            src="/metodologi/visualization.png"
            className="w-16 sm:w-28 mb-2"
            alt=""
          />
          <div className="font-bold lumut-col max-sm:text-sm">
            WaTree Web Application
          </div>
        </div>
      </div>
    </>
  );
};

export default Methods;
