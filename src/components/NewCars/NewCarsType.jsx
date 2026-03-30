import React from 'react';

import car1 from '../../assets/car1.png'
const cars = [
  {
    name: "The New Toyota bZ4X",
    engine: "2.0L 4-Cyl. Engine",
    fuel: "32 CITY / 41 HWY",
    seats: "5 Seats",
    price: "€25,858.00",
  },
  {
    name: "The New Urban Cruiser",
    engine: "3.5L V6 Engine",
    fuel: "21 CITY / 29 HWY",
    seats: "7 Seats",
    price: "€45,678.00",
  },
  {
    name: "New Toyota C-HR+",
    engine: "2.5L 4-Cyl. Engine",
    fuel: "28 CITY / 39 HWY",
    seats: "5 Seats",
    price: "€28,478.00",
  },
  {
    name: "2025 Toyota RAV4 XLE",
    engine: "2.5L 4-Cyl. Engine",
    fuel: "27 CITY / 35 HWY",
    seats: "5 Seats",
    price: "€32,199.00",
  },
];
const NewCarsType = () => {
    return (
       <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 FILTER BAR */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div>
            <p className="text-sm mb-2 text-black">Vehicle type</p>
            <select className="input">
              <option>Select category</option>
            </select>
          </div>

          <div>
            <p className="text-sm mb-2 text-black">Fuel type</p>
            <select className="input">
              <option>Select fuel</option>
            </select>
          </div>

          <div>
            <p className="text-sm mb-2">Price range</p>
            <input type="range" className="w-full accent-red-500" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>From 18,000 €</span>
              <span>Up to 25,000 €</span>
            </div>
          </div>

        </div>

        {/* 🔹 CAR GRID */}
        <div className="grid md:grid-cols-4 gap-6">

          {cars.map((carData, i) => (
            <div key={i} className="bg-white p-5 shadow-sm relative">

              {/* IMAGE */}
              <div className="relative mb-4">
                <img src={car1} className="w-full h-40 object-contain" />

                {/* bookmark */}
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                  ❤
                </div>
              </div>

              {/* STOCK */}
              <span className="text-green-600 bg-green-100 px-3 py-1 text-xs inline-block mb-3">
                In Stock
              </span>

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-3">
                {carData.name}
              </h3>

              {/* SPECS */}
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
                <span>Engine:</span><span>{carData.engine}</span>
                <span>Fuel Efficiency:</span><span>{carData.fuel}</span>
                <span>Gearbox:</span><span>Automatic</span>
                <span>Seat Plan:</span><span>{carData.seats}</span>
              </div>

              {/* FEATURES */}
              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Key Features</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                  <span>Android Auto</span>
                  <span>Apple CarPlay</span>
                  <span>Backup Camera</span>
                  <span>Blind Spot Monitor</span>
                  <span>Keyless Entry</span>
                  <span>Push Start</span>
                </div>
              </div>

              {/* PRICE */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Smart Price</span>
                <span className="font-bold text-lg">{carData.price}</span>
              </div>

              {/* BUTTON */}
              <button className="w-full border border-red-500 text-red-500 py-2 hover:bg-red-500 hover:text-white transition">
                View Details
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
    );
};

export default NewCarsType;