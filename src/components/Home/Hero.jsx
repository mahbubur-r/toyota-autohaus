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

                    <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
                        Experience <br />
                        Mobility in a New <br />
                        Way!
                    </h1>

                    <p className="mt-6 text-gray-500 text-lg max-w-lg">
                        Discover innovative hybrid technology, reliable vehicles, and first-class
                        service – all under one roof.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition">
                            EXPLORE NEW CARS
                        </button>

                        <button className="border border-gray-700 px-8 py-3 font-semibold hover:bg-gray-100 transition">
                            FIND USED CARS
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative">

                    {/* People */}
                    <div className="absolute top-0 right-0 flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <img src={user1} className="w-11 h-11 rounded-full border-2 border-white" />
                            <img src={user2} className="w-11 h-11 rounded-full border-2 border-white" />
                            <img src={user3} className="w-11 h-11 rounded-full border-2 border-white" />
                        </div>
                        <p className="font-semibold text-gray-700">12.5K+ People</p>
                    </div>

                    {/* Car */}
                    <img
                        src={heroCar }
                        alt="Car"
                        className="
                         mt-15 relative z-10"
                    />

                    {/* Glass Card */}
                    <div className="absolute bottom-8 right-8 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 text-center">
                        <h3 className="text-4xl font-bold text-gray-900">50+</h3>
                        <p className="text-gray-600">Car Types Available</p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE FLOATING BAR */}
            <div className="hidden md:flex flex-col absolute right-6 top-1/2 -translate-y-1/2 bg-red-600 rounded-md overflow-hidden shadow-lg">
                {["🛒", "👤", "🚗", "📄"].map((icon, i) => (
                    <button key={i} className="p-4 text-white border-b border-red-500 hover:bg-red-700">
                        {icon}
                    </button>
                ))}
            </div>

            {/* BOTTOM PILLS */}
            <div className="mt-16 flex justify-center gap-5">
                {["Rent", "Buy", "Sell", "Consult"].map((item, i) => (
                    <button
                        key={i}
                        className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Hero;