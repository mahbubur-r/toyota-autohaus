import React from 'react';
import leasingImg from '../../assets/leasing.png';

const CarLeasingBanner = () => {
    return (
        <section className="py-24 bg-[#f3f3f5]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div>
                    <h2 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
                        Car Leasing in Germany <br />
                        Made Simple
                    </h2>

                    <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
                        Leasing is a popular option in Germany, but with FINN’s car subscription,
                        you get even more flexibility and peace of mind. No long-term contracts,
                        no hidden costs – just a car when you need it, delivered right to your door.
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-6 mb-10">

                        {[
                            {
                                title: "No down payment",
                                text: "start driving without upfront costs"
                            },
                            {
                                title: "Home delivery",
                                text: "your car arrives at your doorstep"
                            },
                            {
                                title: "All-inclusive package",
                                text: "insurance, taxes, and maintenance already covered"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                                    ✓
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">{item.title}</span> – {item.text}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* BUTTON */}
                    <button className="border border-red-500 text-red-500 px-8 py-3 font-semibold hover:bg-red-500 hover:text-white transition">
                        Discover all leasing plan
                    </button>
                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center md:justify-end">

                    {/* Red background shape */}
                    <div className="absolute bottom-[-20px] right-[-20px] w-[320px] h-[260px] bg-red-600 z-0"></div>

                    {/* Image */}
                    <img
                        src={leasingImg}
                        alt="Leasing"
                        className="relative z-10 w-[420px] h-[300px] object-cover shadow-xl"
                    />

                </div>

            </div>
        </section>
    );
};

export default CarLeasingBanner;