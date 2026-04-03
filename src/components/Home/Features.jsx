import React from 'react';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';
import feature3 from '../../assets/feature3.png';
import feature4 from '../../assets/feature4.png';

const Features = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-7xl mx-auto px-6">


                <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
                    Every Feature that may Amaze you
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                    <div>
                        <img src={feature1} className="rounded-2xl mb-5 w-full h-[260px] object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Service & Maintenance</h3>
                        <p className="text-gray-500 text-sm mb-3">
                            A lightweight, travel-friendly Level 1 charger designed for convenience.
                            Plugs into standard wall outlets.
                        </p>
                        <p className="text-gray-400 line-through inline mr-2">$999</p>
                        <span className="text-black font-semibold text-lg">$599</span>
                    </div>

                    <div>
                        <img src={feature2} className="rounded-2xl mb-5 w-full h-[260px] object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Body & Paint</h3>
                        <p className="text-gray-500 text-sm mb-3">
                            A lightweight, travel-friendly Level 1 charger designed for convenience.
                            Plugs into standard wall outlets.
                        </p>
                        <p className="text-gray-400 line-through inline mr-2">$999</p>
                        <span className="text-black font-semibold text-lg">$599</span>
                    </div>

                    <div>
                        <img src={feature3} className="rounded-2xl mb-5 w-full h-[260px] object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Toyota Relax Warranty</h3>
                        <p className="text-gray-500 text-sm mb-3">
                            A lightweight, travel-friendly Level 1 charger designed for convenience.
                            Plugs into standard wall outlets.
                        </p>
                        <p className="text-gray-400 line-through inline mr-2">$999</p>
                        <span className="text-black font-semibold text-lg">$599</span>
                    </div>

                    <div>
                        <img src={feature4} className="rounded-2xl mb-5 w-full h-[260px] object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Service Offers</h3>
                        <p className="text-gray-500 text-sm mb-3">
                            A lightweight, travel-friendly Level 1 charger designed for convenience.
                            Plugs into standard wall outlets.
                        </p>
                        <p className="text-gray-400 line-through inline mr-2">$999</p>
                        <span className="text-black font-semibold text-lg">$599</span>
                    </div>

                </div>


                <div className="flex justify-center mt-12">
                    <button className="border border-red-500 text-red-500 px-10 py-3 font-semibold hover:bg-red-500 hover:text-white transition">
                        EXPLORE MORE
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Features;