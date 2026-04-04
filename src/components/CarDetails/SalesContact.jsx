import React from "react";
import person from "../../assets/salesman.png";

const SalesContact = () => {
  return (
    <section className="bg-[#f5f5f5] py-10">

      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">

        <div className="w-[180px] shrink-0">
          <img
            src={person}
            alt="Sales Consultant"
            className="w-full object-cover"
          />
        </div>

        <div className="flex-1">

          <h2 className="text-xl font-bold mb-2">
            Do you want to buy this car?
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            I assure you that together we find the most advantageous solution.
          </p>

          <h3 className="font-semibold text-lg">
            Silhouette Whimsy
          </h3>

          <p className="text-gray-500 text-sm mb-4">
            Sales Consultant
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center gap-2 font-semibold w-fit transition">
            📞 +49 97 25917 3740
          </button>

        </div>

      </div>

    </section>
  );
};

export default SalesContact;