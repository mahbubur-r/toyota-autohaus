import React, { useState } from "react";
import mainImg from "../../assets/car1.png";
import img2 from "../../assets/car2.png";
import img3 from "../../assets/car3.png";
import img4 from "../../assets/car4.png";

const images = [mainImg, img2, img3, img4];

const CarDetailsHero = () => {
  const [selectedImg, setSelectedImg] = useState(mainImg);

  return (
    <section className="bg-[#f5f5f5] py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-6">
          2022 Toyota Highlander XLE FWD
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT IMAGE GALLERY */}
          <div className="md:col-span-2 flex gap-4">

            {/* MAIN IMAGE */}
            <div className="flex-1">
              <img
                src={selectedImg}
                className="w-full h-[380px] object-cover"
                alt="car"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImg(img)}
                  className={`w-[90px] h-[80px] object-cover cursor-pointer border-2 ${
                    selectedImg === img ? "border-red-500" : "border-transparent"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT PRICE CARD */}
          <div className="bg-white p-6 shadow-sm border border-gray-200 flex flex-col justify-between">

            <div>
              <p className="text-green-600 font-semibold mb-4">
                The car is available
              </p>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Net price</span>
                  <span>€ 46.165</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Warranty (1 year, Basic package)
                  </span>
                  <span>Included</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Transport</span>
                  <span>On request</span>
                </div>

                <div className="flex justify-between font-semibold mt-3">
                  <span>Total net price</span>
                  <span>€ 46.165</span>
                </div>

              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-6 bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition">
              Get more Details
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CarDetailsHero;