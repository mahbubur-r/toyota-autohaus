import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const detailsLeft = [
  ["ID no.", "6Zb5HjGuCEQ"],
  ["Condition", "Demo car"],
  ["Body type", "SUV / Off-road Vehicle / Pickup Truck"],
  ["Year", "2012"],
  ["First registration", "12/2024"],
  ["Vehicle location", "Germany"],
  ["Country of registration", "Germany"],
  ["Mileage", "8,386 km"],
  ["Fuel type", "Electric"],
  ["Transmission", "Automatic gear"],
];

const detailsRight = [
  ["Power", "250 kW (340 HP)"],
  ["Cubic capacity", "------------"],
  ["Exterior color", "White, Metallic"],
  ["Interior", "Part leather, Black"],
  ["Number of seats", "5"],
  ["Number of doors", "4/5"],
  ["Sliding doors", "--------"],
  ["Air conditioning", "Automatic climatization, 3 zones"],
  ["Emission class", "Euro6"],
  ["Available from", "--------"],
];

const features = [
  "ABS","Adaptive Cruise Control","Alloy wheels","Ambient lighting","Arm rest",
  "Automatic dimming mirror","Bi-xenon headlights","Bluetooth","Cruise control",
  "Driver Airbag","ESP","Electric windows","Emergency brake assist",
  "Four wheel drive","Front airbags","Hands-free kit","Heated seats",
  "Head-up display","Navigation system","Lane change assist","LED headlights",
  "Rear parking sensors","Sport seats","Tyre pressure monitoring"
];

const otherDetails = [
  ["Battery", "6Zb5HjGuCEQ"],
  ["Battery capacity", "Demo car"],
  ["Electric range", "498 km"],
  ["Fast charging time", "2012"],
  ["Combined consumption", "17.7 kWh / 100 km"],
  ["Range extender", "------------"],
  ["With battery certificate", "------------"],
];

const faqs = [
  "Who can I refer?",
  "How will I get paid?",
  "When do I get the reward?",
  "Is there a limit to how many friends I can refer?",
];

const CarDetailsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-6">Car Details</h2>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* LEFT */}
          <div className="space-y-3">
            {detailsLeft.map((item, i) => (
              <div key={i} className="flex justify-between border-b pb-2 text-sm">
                <span className="text-gray-500">{item[0]}</span>
                <span className="font-medium">{item[1]}</span>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-3">
            {detailsRight.map((item, i) => (
              <div key={i} className="flex justify-between border-b pb-2 text-sm">
                <span className="text-gray-500">{item[0]}</span>
                <span className="font-medium">{item[1]}</span>
              </div>
            ))}
          </div>

        </div>

        {/* FEATURES */}
        <h3 className="text-xl font-semibold mb-4">Features</h3>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <FaRegCheckCircle className="text-green-500 text-xs" />
              {feature}
            </div>
          ))}
        </div>

        {/* OTHER DETAILS */}
        <h3 className="text-xl font-semibold mb-4">Other details</h3>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {otherDetails.map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-2 text-sm">
              <span className="text-gray-500">{item[0]}</span>
              <span className="font-medium">{item[1]}</span>
            </div>
          ))}
        </div>

        {/* DESCRIPTION / FAQ */}
        <h3 className="text-xl font-semibold mb-4">Description</h3>

        <div className="space-y-3 max-w-xl">
          {faqs.map((q, i) => (
            <div key={i} className="border rounded-md bg-white">

              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-4 py-3 flex justify-between items-center text-sm font-medium"
              >
                {q}
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>

              {openIndex === i && (
                <div className="px-4 pb-3 text-gray-500 text-sm">
                  This is sample answer content. Replace with real data.
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarDetailsSection;