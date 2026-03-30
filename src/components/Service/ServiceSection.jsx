import React from "react";

const services = [
  {
    title: "Regular Maintenance & Inspections",
    oldPrice: "$999",
    price: "$799",
    features: [
      "Factory-standard check-ups",
      "Oil & filter service",
      "TÜV / emissions testing",
      "Digital service history",
    ],
  },
  {
    title: "Repairs & Diagnostics",
    oldPrice: "$799",
    price: "$599",
    features: [
      "Quick fault diagnostics",
      "Genuine Toyota parts",
      "Mechanical & electrical repairs",
      "Fast turnaround",
    ],
  },
  {
    title: "Hybrid & EV Service",
    oldPrice: "$649",
    price: "$549",
    features: [
      "Certified hybrid/EV experts",
      "Efficiency optimization",
      "Battery testing & care",
      "Software updates",
    ],
  },
  {
    title: "Accident & Body Repairs",
    oldPrice: "$999",
    price: "$799",
    features: [
      "Dent & bodywork repair",
      "Insurance handling",
      "Factory-approved paint",
      "Safety-certified repairs",
    ],
  },
  {
    title: "Seasonal Services",
    oldPrice: "$999",
    price: "$799",
    features: [
      "Seasonal services",
      "Battery checks",
      "A/C inspection & refill",
      "Seasonal safety check",
    ],
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE (SERVICES) */}
        <div className="md:col-span-2 space-y-6">

          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 border border-gray-200 shadow-sm">

              {/* TOP */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <div className="text-right">
                  <p className="text-gray-400 line-through text-sm">
                    {service.oldPrice}
                  </p>
                  <p className="text-2xl font-bold">
                    {service.price}
                  </p>
                </div>
              </div>

              {/* DESC */}
              <p className="text-gray-500 text-sm mb-4 max-w-xl">
                Stay worry-free with professional servicing, factory-recommended
                check-ups, and official TÜV / emissions tests.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-6">
                {service.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex justify-end">
                <button className="bg-red-600 text-white px-6 py-2 text-sm font-semibold hover:bg-red-700 transition">
                  Get more
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE (INFO BOXES) */}
        <div className="space-y-6">

          {/* LOCATION */}
          <div className="bg-white p-6 border border-gray-200">
            <h4 className="font-semibold mb-3">
              Main Location – Göttingen
            </h4>
            <p className="text-sm text-gray-600">
              DiT Göttingen GmbH <br />
              Hans-Böckler-Straße 26 <br />
              37079 Göttingen, Germany
            </p>

            <h4 className="font-semibold mt-5 mb-2">
              Branch – Osterode am Harz
            </h4>
            <p className="text-sm text-gray-600">
              Hauptstraße 151–153 <br />
              37520 Osterode am Harz, Germany
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-white p-6 border border-gray-200">
            <h4 className="font-semibold mb-3">
              Phone (Sales & Service)
            </h4>
            <p className="text-sm text-gray-600">
              Phone: +49 (0)551 123456 <br />
              Fax: +49 (0)551 123457 <br />
              Email: info@dit-goettingen.de
            </p>
          </div>

          {/* OPENING HOURS */}
          <div className="bg-white p-6 border border-gray-200">
            <h4 className="font-semibold mb-3">
              Opening Hours
            </h4>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>Monday - Thursday: 8 am - 8 pm</li>
              <li>Friday: 8 am - 6 pm</li>
              <li>Saturday: 9 am - 4 pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceSection;