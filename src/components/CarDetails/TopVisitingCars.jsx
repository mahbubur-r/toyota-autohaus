import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import { Link } from "react-router";

const cars = [
  {
    name: "Toyota Yaris Cross",
    location: "Herford",
    img: car1,
  },
  {
    name: "Toyota Lexus",
    location: "Herford",
    img: car2,
  },
  {
    name: "Toyota Corolla CS",
    location: "Herford",
    img: car3,
  },
  {
    name: "Toyota Lexus",
    location: "Herford",
    img: car2,
  },
];

const TopVisitingCars = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Top Visiting Cars
        </h2>
        <div className="grid md:grid-cols-4 gap-6">

          {cars.map((car, i) => (
            <div key={i} className="bg-white border border-gray-200">

              <div className="relative">

                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />

                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-7 h-7 rounded-full shadow text-sm">
                  ‹
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-7 h-7 rounded-full shadow text-sm">
                  ›
                </button>

                <div className="absolute top-2 right-2 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow text-red-500">
                  🔖
                </div>

              </div>

              <div className="p-4 text-sm">

                <h3 className="text-lg font-semibold mb-2">
                  {car.name}
                </h3>

                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>VIN: 32T3RFEV9GW446460</span>
                  <span className="text-red-500">📍 {car.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 mb-4">

                  <span>First registration</span><span>09-2024</span>
                  <span>Mileage</span><span>32 CITY / 41 HWY</span>

                  <span>Gearbox</span><span>Automatic</span>
                  <span>Doors</span><span>5</span>

                  <span>Seats</span><span>5</span>
                  <span>Fuel</span><span>Hybrid petrol</span>

                </div>

                <p className="text-xs text-gray-500">Start from</p>
                <p className="font-bold text-lg mb-4">€119.00/Month</p>

                <div className="space-y-2">

                  <button className="w-full border border-gray-300 py-2 text-sm hover:bg-gray-100">
                    Compare to Others
                  </button>

                  <Link to="/car-details" className="btn bg-white w-full border border-red-500 text-red-500 py-2 text-sm hover:bg-red-500 hover:text-white transition">
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TopVisitingCars;