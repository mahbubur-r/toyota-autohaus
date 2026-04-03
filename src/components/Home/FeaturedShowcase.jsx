import React from 'react';
import redSedan from '../../assets/red_sedan.png';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';
import car5 from '../../assets/car5.png';
import car6 from '../../assets/car6.png';
import car7 from '../../assets/car7.png';
import car8 from '../../assets/car8.png';

const FeaturedShowcase = () => {

    const featuredModels = [
        { img: car1, name: "Corolla Hatchback" },
        { img: car2, name: "Toyota bZ4X XLE" },
        { img: car3, name: "PowerVolt P450" },
        { img: car4, name: "PowerVolt P450" },
        { img: car5, name: "Corolla Hatchback" },
        { img: car6, name: "Toyota bZ4X XLE" },
        { img: car7, name: "Toyota bZ4X XLE" },
        { img: car8, name: "PowerVolt P450" }
    ];

    return (
        <section className="py-20 bg-white text-black relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section 1: Why Choose Toyota? */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-32 h-auto md:h-[500px]">
                    
                    {/* Left Written Content */}
                    <div className="w-full md:w-1/3 mb-10 md:mb-0 relative z-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose Toyota?
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            When it comes to reliability, innovation, and driving pleasure, Toyota sets the standard worldwide. With decades of experience, award-winning hybrid technology, and a customer-first approach, Toyota is the smart choice for drivers who value quality and peace of mind.
                        </p>
                    </div>

                    {/* Right Car Imagery & Floating Cards */}
                    <div className="w-full md:w-2/3 relative h-full flex items-center justify-center">
                        <img src={redSedan} alt="Toyota Red Sedan" className="w-[85%] max-w-full relative z-10 drop-shadow-2xl object-contain mt-10 md:mt-0" />

                        {/* Floating Card 1: Safety Comes First */}
                        <div className="hidden md:block absolute top-[15%] left-[5%] bg-white/80 backdrop-blur-md border border-white p-5 rounded-2xl shadow-xl w-60 z-20">
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Safety Comes First</h4>
                            <p className="text-gray-500 text-[11px] leading-tight">Equipped with Toyota Safety Sense, our cars protect what matters most.</p>
                        </div>

                        {/* Floating Card 2: Unmatched Reliability */}
                        <div className="hidden md:block absolute top-[-5%] right-[15%] bg-white/80 backdrop-blur-md border border-white p-5 rounded-2xl shadow-xl w-60 z-20">
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Unmatched Reliability</h4>
                            <p className="text-gray-500 text-[11px] leading-tight">Toyota vehicles are built to last - giving you confidence on every journey.</p>
                        </div>

                        {/* Floating Card 3: Innovative Hybrid */}
                        <div className="hidden md:block absolute bottom-[0%] right-[-5%] bg-white/80 backdrop-blur-md border border-white p-5 rounded-2xl shadow-xl w-64 z-20">
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Innovative Hybrid Technology</h4>
                            <p className="text-gray-500 text-[11px] leading-tight">Drive smarter and greener with Toyota's pioneering hybrid and electric solutions.</p>
                        </div>
                    </div>
                </div>


                {/* Section 2: Featured Models Showcase */}
                <div className="mt-20">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Featured Models Showcase
                        </h2>
                        <button className="hidden sm:flex border border-gray-300 text-gray-700 px-6 py-2 bg-white hover:bg-gray-50 transition items-center gap-2 font-medium">
                            See more <span className="text-xl">→</span>
                        </button>
                    </div>

                    {/* Grid of Cars */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {featuredModels.map((car, idx) => (
                            <div key={idx} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-full h-48 md:h-56 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    <img src={car.img} alt={car.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800">{car.name}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Mobile version of See More button */}
                    <div className="mt-10 flex justify-center sm:hidden">
                        <button className="border border-gray-300 text-gray-700 px-6 py-2 bg-white hover:bg-gray-50 transition w-full flex items-center justify-center gap-2 font-medium">
                            See more <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedShowcase;
