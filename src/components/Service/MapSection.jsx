import React from "react";

const MapSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 text-black">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-3">
            Your Vehicle's Best Friend
          </h2>
          <p className="text-gray-500 max-w-xl">
            Experience excellence in automotive care – choose [Your Car Repair Shop]
            for all your vehicle maintenance and repair requirements.
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative rounded-xl overflow-hidden">

          {/* GOOGLE MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-[450px] grayscale"
            loading="lazy"
          ></iframe>

          {/* INFO CARD */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-xl p-6 w-[320px] rounded-lg">

            {/* CLOSE ICON */}
            <button className="absolute top-3 right-3 text-gray-400 hover:text-black">
              ✕
            </button>

            {/* LOCATION */}
            <div className="flex gap-3 mb-5">
              <div className="text-blue-500 text-xl">📍</div>
              <div>
                <p className="font-semibold text-sm">
                  New York, 112 W 34th St, Manhattan
                </p>
                <p className="text-gray-500 text-xs">
                  Know our locations and affiliates in New York. Contact us today.
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-3 mb-5">
              <div className="text-blue-500 text-xl">📞</div>
              <div>
                <p className="font-semibold text-sm">
                  (1) 212-946-2700 / 212-946-2707
                </p>
                <p className="text-gray-500 text-xs">
                  Visit our appointment request page to find a time convenient for you.
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="flex gap-3">
              <div className="text-blue-500 text-xl">⏰</div>
              <div>
                <p className="font-semibold text-sm mb-1">
                  Our Opening Hours
                </p>
                <p className="text-gray-500 text-xs">
                  Monday–Friday: 8.00am – 6.00pm
                </p>
                <p className="text-gray-500 text-xs">
                  Saturday: 9.00am – 2.00pm
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MapSection;