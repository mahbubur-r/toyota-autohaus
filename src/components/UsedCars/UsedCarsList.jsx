import React, { useState } from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car1.png";
import car8 from "../../assets/car2.png";

const cars = [
  { title: "2022 Toyota Highlander XLE FWD", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car1 },
  { title: "2025 Toyota Camry Hybrid HEV XLE AWD", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car2 },
  { title: "Toyota Venza Gets New Look", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car3 },
  { title: "2025 Toyota Camry Hybrid HEV XLE AWD", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car4 },
  { title: "2022 Toyota Highlander XLE FWD", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car5 },
  { title: "2025 Toyota Camry Hybrid HEV XLE AWD", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car6 },
  { title: "Toyota Venza Gets New Look", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car7 },
  { title: "2025 Toyota Camry Hybrid HEV XLE AWD", location: "Herford", price: "23,540 €", vin: "32T3RFEV9GW446460", img: car8 },
];

const UsedCarsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = cars.slice(startIndex, startIndex + carsPerPage);

  return (
    <section className="bg-[#f5f5f5] py-12 text-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <select className="border px-3 py-2 text-sm"><option>Select model</option></select>
          <select className="border px-3 py-2 text-sm"><option>Registration Date From</option></select>
          <select className="border px-3 py-2 text-sm"><option>Select location</option></select>

          <div>
            <p className="text-sm mb-1">Price range</p>
            <input type="range" className="w-full accent-red-500" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>From 18,000 €</span>
              <span>Up to 40,000 €</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {currentCars.map((car, i) => (
            <div key={i} className="bg-white p-4 md:p-6 flex flex-col md:flex-row gap-6 border border-gray-200">

              <img src={car.img} className="w-full md:w-[280px] h-[180px] object-cover" />

              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{car.title}</h3>

                <p className="text-sm text-red-500 mb-3">
                  📍 Location: {car.location}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-gray-600">
                  <p>First registration:</p><p>09-2024</p>
                  <p>Mileage:</p><p>8,845 km</p>
                  <p>Fuel Type:</p><p>Hybrid</p>
                  <p>Transmission:</p><p>Automatic</p>
                  <p>Body Type:</p><p>SUV</p>
                  <p>Cubic Capacity:</p><p>1764 cm³</p>
                  <p>Engine:</p><p>3.5L V6 Gas</p>
                </div>
              </div>

              <div className="flex flex-col justify-between md:items-end">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Start from:</p>
                  <p className="text-xl font-bold">{car.price}</p>
                  <p className="text-xs text-gray-400 mt-1">VIN: {car.vin}</p>
                </div>

                <button className="mt-4 border border-red-500 text-red-500 px-5 py-2 text-sm hover:bg-red-500 hover:text-white transition">
                  More Details
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10 text-sm">

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-3 py-1 border disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Back
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border ${currentPage === i + 1 ? "bg-black text-white" : ""
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="px-3 py-1 border disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>

          </div>

          <p className="text-gray-500">
            {startIndex + 1}–{Math.min(startIndex + carsPerPage, cars.length)} of {cars.length}
          </p>

        </div>

      </div>
    </section>
  );
};

export default UsedCarsList;