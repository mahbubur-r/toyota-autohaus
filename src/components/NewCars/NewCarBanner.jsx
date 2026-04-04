import React from 'react';
import NewCar from '../../assets/NewCarBanner.png'

const NewCarBanner = () => {
  return (



    <section className="relative h-[420px] overflow-hidden bg-black">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(255,255,255,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#222] to-black"></div>

      <div className="absolute left-0 top-0 h-full w-[350px] bg-red-600 clip-diagonal"></div>
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        <div className="relative">
          <img
            src={NewCar}
            className="w-[480px] -ml-10 drop-shadow-2xl"
          />
        </div>

        <div className="text-right text-white max-w-md mr-10">

          <p className="text-gray-400 tracking-wide mb-2">
            BEST CHOICE
          </p>

          <h2 className="text-5xl font-extrabold text-red-600 mb-3">
            CAR LEASING
          </h2>

          <p className="text-lg mb-6">
            <span className="text-red-500 font-bold">BIG</span> and{" "}
            <span className="text-red-500 font-bold">SMALL</span> we have them all!
          </p>

          <div className="w-40 h-[2px] bg-gray-400 ml-auto mb-6"></div>

          <button className="bg-red-600 px-8 py-3 font-semibold hover:bg-red-700 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>


  );
};

export default NewCarBanner;