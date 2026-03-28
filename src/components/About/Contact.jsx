import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-[#f3f3f5] text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT → MAP */}
        <div className="w-full h-[600px]">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Germany&output=embed"
            className="w-full h-full border-0 rounded"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT → FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact</h2>

          <form className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Company" className="input" />
              <select className="input">
                <option>Select</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="input" />
              <input type="text" placeholder="Last name" className="input" />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Street" className="input" />
              <input type="text" placeholder="ZIP / City" className="input" />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Phone number" className="input" />
              <input type="email" placeholder="e-mail address" className="input" />
            </div>

            {/* Location */}
            <select className="input w-full">
              <option>Select a branch</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="type your message here"
              rows="4"
              className="input w-full"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <label>I have read the privacy policy .* </label>
            </div>

            {/* Button */}
            <button className="w-full bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition">
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;