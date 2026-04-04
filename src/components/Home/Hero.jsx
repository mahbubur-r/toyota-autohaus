import React from "react";
import heroCar from "../../assets/heroCar.png";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const Hero = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#f3f3f5] via-[#f8f2f2] to-[#f3f3f5]">--
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10">

                {/* LEFT */}
                <div className="relative">
                    {/* Background watermark */}
                    <h1 className="absolute text-[160px] font-extrabold text-gray-200 top-10 left-40 -z-10 select-none">
                        TOYOTA
                    </h1>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        Experience <br className="hidden md:block" />
                        Mobility in a New <br className="hidden md:block" />
                        Way!
                    </h1>

                    <p className="mt-6 text-gray-500 text-lg max-w-lg">
                        Discover innovative hybrid technology, reliable vehicles, and first-class
                        service – all under one roof.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition">
                            EXPLORE NEW CARS
                        </button>

                        <button className="border border-gray-700 text-black px-8 py-3 font-semibold hover:bg-gray-100 transition">
                            FIND USED CARS
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex flex-col items-end">

                    {/* People */}
                    <div className="absolute -top-10 right-0 md:right-10 flex flex-col items-center gap-2">
                        <div className="flex -space-x-3">
                            <img src={user1} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                            <img src={user2} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                            <img src={user3} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                        </div>
                        <p className="font-bold text-[14px] text-gray-900">12.5K+ People</p>
                    </div>

                    {/* Car */}
                    <img
                        src={heroCar}
                        alt="Car"
                        className="mt-10 relative z-10 w-full object-contain"
                    />

                    {/* Glass Card */}
                    <div className="absolute bottom-20 right-4 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-5 text-center border border-white/40">
                        <h3 className="text-5xl font-extrabold text-gray-900">50<span className="text-gray-900">+</span></h3>
                        <p className="text-gray-600 text-sm font-medium leading-tight mt-1">Car Types <br /> Available</p>
                    </div>

                    {/* BOTTOM PILLS */}
                    <div className="flex flex-wrap justify-end gap-3 mt-4 mr-0 md:mr-10">
                        {["Rent", "Buy", "Sell", "Consult"].map((item, i) => (
                            <button
                                key={i}
                                className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition font-medium text-sm bg-white"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE FLOATING BAR */}
            <div className="hidden md:flex flex-col absolute right-6 top-1/2 -translate-y-1/2 bg-red-600 rounded-md overflow-hidden shadow-lg z-30">
                {["🛒", "👤", "🚗", "📄"].map((icon, i) => (
                    <button key={i} className="p-4 text-white border-b border-red-500 hover:bg-red-700 transition">
                        {icon}
                    </button>
                ))}
            </div>

            {/* FLOATING VEHICLE SEARCH */}
            <div className="max-w-6xl mx-auto mt-12 md:mt-20 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-8 px-6 md:px-10 relative z-20 mx-4 md:mx-auto border border-gray-100">
                <h3 className="text-2xl font-bold text-[#353f4f] mb-6">Find Available Vehicles</h3>

                {/* Search Bar */}
                <div className="bg-[#f2f4f7] rounded-md flex flex-col md:flex-row w-full overflow-hidden border border-gray-200">
                    <select className="flex-1 bg-transparent py-4 px-4 md:px-6 outline-none border-b md:border-b-0 md:border-r border-gray-300 text-gray-600 text-sm font-medium cursor-pointer">
                        <option>Select a Model</option>
                    </select>
                    <select className="flex-1 bg-transparent py-4 px-4 md:px-6 outline-none border-b md:border-b-0 md:border-r border-gray-300 text-gray-600 text-sm font-medium cursor-pointer">
                        <option>Price Until</option>
                    </select>
                    <select className="flex-1 bg-transparent py-4 px-4 md:px-6 outline-none border-b md:border-b-0 text-gray-600 text-sm font-medium cursor-pointer">
                        <option>Registration Date From</option>
                    </select>
                    <button className="bg-red-600 text-white font-semibold w-full md:w-auto md:flex-[0.5] py-4 px-8 hover:bg-red-700 transition flex items-center justify-center gap-2">
                        Show Results <span>&gt;</span>
                    </button>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-6 text-sm text-gray-500 font-medium">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-red-600 rounded border-white" />
                        New Cars
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-red-600 rounded border-gray-300" />
                        Daily Registrations
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-red-600 rounded border-gray-300" />
                        Demonstration Vehicles
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-red-600 rounded border-gray-300" />
                        Used Cars
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Hero;