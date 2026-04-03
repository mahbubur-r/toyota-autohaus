import React from 'react';

import Newcar1 from "../../assets/newCar1.png";
import Newcar2 from "../../assets/NewCar2.png";
import Newcar3 from "../../assets/NewCar3.png";
import Newcar4 from "../../assets/NewCar4.png";

const NewCarDetails = () => {

  const cars = [
    {
      name: "The New Toyota bZ4X",
      engine: "2.0L 4-Cyl. Engine",
      fuel: "32 CITY / 41 HWY",
      seats: "5 Seats",
      gearbox: "Automatic",
      price: "€25,858.00",
      image: Newcar1,
    },
    {
      name: "2025 Toyota RAV4 XLE",
      engine: "2.5L 4-Cyl. Engine",
      fuel: "27 CITY / 35 HWY",
      seats: "5 Seats",
      gearbox: "Automatic",
      price: "€32,199.00",
      image: Newcar2,
    },
    {
      name: "The New Urban Cruiser",
      engine: "3.5L V6 Engine",
      fuel: "21 CITY / 29 HWY",
      seats: "7 Seats",
      gearbox: "Automatic",
      price: "€45,678.00",
      image: Newcar3,
    },
    {
      name: "New Toyota C-HR+",
      engine: "2.5L 4-Cyl. Engine",
      fuel: "28 CITY / 39 HWY",
      seats: "5 Seats",
      gearbox: "Automatic",
      price: "€28,478.00",
      image: Newcar4,
    },
  ];

  // duplicate to show 8 cards like design
  const allCars = [...cars, ...cars];
  return (

    <section className="bg-[#f3f3f5] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6">

          {allCars.map((car, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-5 hover:shadow-md hover:-translate-y-1 transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative mb-4">
                <img
                  src={car.image}
                  className="w-full h-40 object-contain"
                />

                {/* wishlist */}
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-red-500 cursor-pointer">
                  ❤
                </div>
              </div>

              {/* STOCK */}
              <span className="text-green-600 bg-green-100 px-3 py-1 text-xs mb-3 inline-block">
                In Stock
              </span>

              {/* TITLE */}
              <h3 className="font-semibold text-black text-lg mb-3">
                {car.name}
              </h3>

              {/* SPECS */}
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
                <span>Engine:</span><span>{car.engine}</span>
                <span>Fuel Efficiency:</span><span>{car.fuel}</span>
                <span>Gearbox:</span><span>{car.gearbox}</span>
                <span>Seat Plan:</span><span>{car.seats}</span>
              </div>

              {/* FEATURES */}
              <div className="mb-4">
                <p className="font-semibold text-sm mb-2 text-black">Key Features</p>

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
                <span className="font-bold text-lg text-black ">{car.price}</span>
              </div>

              {/* BUTTON */}
              <button className="w-full border border-red-500 text-red-500 py-2 font-medium hover:bg-red-500 hover:text-white transition">
                View Details
              </button>

            </div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-end items-center mt-10 gap-2 text-sm">

          <button className="px-3 py-1 border text-gray-400">‹ Back</button>

          <button className="px-3 py-1 bg-black text-white">1</button>
          <button className="px-3 py-1 border">2</button>
          <button className="px-3 py-1 border">3</button>
          <span className="px-2">...</span>
          <button className="px-3 py-1 border">7</button>

          <button className="px-3 py-1 border">Next ›</button>

          <span className="ml-4 text-gray-400">1-15 of 57</span>
        </div>

      </div>
    </section>
  );
};





export default NewCarDetails;