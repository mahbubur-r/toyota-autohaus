import React from "react";
import usedCarImg from "../../assets/used-cars.png";

const UsedCarBanner = () => {
  return (
    <section className="bg-[#f5f5f5] pt-10">

      {/* TITLE AREA */}
      <div className="text-center mb-6">
        <p className="text-3xl text-red-600 font-bold pt-5">
          Used Cars
        </p>

        <h1 className="text-2xl md:text-4xl font-bold text-black mt-5 max-w-4xl mx-auto leading-tight">
          Certified Used Toyota Cars – Quality You Can Trust
        </h1>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative">

        <img
          src={usedCarImg}
          alt="Used Cars"
          className="w-full h-[260px] md:h-[400px] object-cover"
        />

        {/* RIGHT SIDE FLOAT ICONS */}
        <div className="hidden md:flex flex-col gap-4 absolute right-4 top-1/2 -translate-y-1/2">
          <button className="bg-red-600 text-white p-3 rounded hover:bg-red-700">
            🛒
          </button>
          <button className="bg-red-600 text-white p-3 rounded hover:bg-red-700">
            👤
          </button>
          <button className="bg-red-600 text-white p-3 rounded hover:bg-red-700">
            🚗
          </button>
          <button className="bg-red-600 text-white p-3 rounded hover:bg-red-700">
            📄
          </button>
        </div>

      </div>

    </section>
  );
};

export default UsedCarBanner;