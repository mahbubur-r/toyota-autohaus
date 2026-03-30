import React from "react";
import teamImg from "../../assets/team.png";

const features = [
  {
    title: "Expertise",
    desc: "Our team consists of highly trained and certified technicians with years of experience.",
  },
  {
    title: "Competitive Pricing",
    desc: "We offer competitive rates without compromising on quality.",
  },
  {
    title: "Quality Parts",
    desc: "We use top-quality parts and materials to ensure lasting repairs.",
  },
  {
    title: "Quick Turnaround",
    desc: "We aim for swift repairs without sacrificing excellence.",
  },
  {
    title: "Customer-Centric",
    desc: "We listen to your concerns and provide transparent solutions.",
  },
  {
    title: "Trustworthy",
    desc: "We are a trusted name known for reliability and integrity.",
  },
];

const PrecisionSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 text-black">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Precision Repairs, Exceptional Service
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience excellence in automotive care – choose [Your Car Repair Shop]
            for all your vehicle maintenance and repair requirements.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 text-xl">
                ⭐
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BOX */}
        <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-sm">

          {/* IMAGE */}
          <img
            src={teamImg}
            alt="Team"
            className="w-full md:w-[220px] h-[140px] object-cover rounded-lg"
          />

          {/* TEXT */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Get expert car service at Dit Gottingen today!
            </h3>
            <p className="text-gray-500 text-sm">
              Book your next car service with Dit Gottingen and save!
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
            Learn More
          </button>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 text-center gap-10">

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">
              50K+
            </h3>
            <p className="text-gray-500 text-sm">
              People are already reading this book and improving!
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">
              96%
            </h3>
            <p className="text-gray-500 text-sm">
              Satisfaction rate comes from our awesome customers.
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">
              4.9/5.0
            </h3>
            <p className="text-gray-500 text-sm">
              Average customer ratings we have got from users.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PrecisionSection;