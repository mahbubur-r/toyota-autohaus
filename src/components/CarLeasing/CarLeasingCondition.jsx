import React from 'react';
import Car1 from '../../assets/car1.png'
import Car2 from '../../assets/car2.png'
import Car3 from '../../assets/car3.png'
import Car4 from '../../assets/car4.png'
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router';

const cars = Array(6).fill({
  name: "Toyota Yaris Cross",
  location: "Herford",
  price: "€119.00/Month",
  fuel: "Hybrid petrol",
  gearbox: "Automatic",
  doors: 5,
  seats: 5,
  reg: "09-2024",
  mileage: "32 CITY / 41 HWY",
});

const CarLeasingCondition = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 text-black">
      <div className="max-w-7xl mx-auto px-6 flex gap-6">


        <div className="w-[300px] bg-white p-6 shadow-sm h-fit">
          <h3 className="text-lg text-black font-semibold mb-6">Vehicle condition</h3>

          <div className="space-y-4">

            <select className="input"><option>Select model</option></select>
            <select className="input"><option>Registration Date</option></select>
            <select className="input"><option>Mileage</option></select>
            <select className="input"><option>Fuel Type</option></select>
            <select className="input"><option>Gearbox</option></select>
            <select className="input"><option>Vehicle color</option></select>
            <select className="input"><option>Location</option></select>


            <div>
              <p className="text-sm mb-2">Price range</p>
              <input type="range" className="w-full accent-red-500" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>From 18,000 €</span>
                <span>Up to 25,000 €</span>
              </div>
            </div>

          </div>
        </div>


        <div className="flex-1 grid md:grid-cols-3 gap-6">

          {cars.map((car, i) => (
            <div key={i} className="bg-white shadow-sm">

              <div className="relative">

                <img src={Car2} className="w-full h-44 object-cover" />

                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow">‹</button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow">›</button>

                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                  <CiBookmark className='text-red-500' />
                </div>
              </div>


              <div className="p-4 text-sm">

                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>

                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>VIN: 32T3RFEV9GW446460</span>
                  <span className="text-red-500">📍 {car.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 mb-4">
                  <span>First registration</span><span>{car.reg}</span>
                  <span>Mileage</span><span>{car.mileage}</span>
                  <span>Gearbox</span><span>{car.gearbox}</span>
                  <span>Doors</span><span>{car.doors}</span>
                  <span>Seats</span><span>{car.seats}</span>
                  <span>Fuel</span><span>{car.fuel}</span>
                </div>


                <p className="text-xs text-gray-500">Start from</p>
                <p className="font-bold text-lg mb-4">{car.price}</p>


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



export default CarLeasingCondition;