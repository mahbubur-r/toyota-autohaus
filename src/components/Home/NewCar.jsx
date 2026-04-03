import React from 'react';
import blueSuv from '../../assets/blue_suv.png';
import graySuv from '../../assets/gray_suv.png';
import whiteSuv from '../../assets/white_suv.png';

const NewCar = () => {
    return (
        <section className="py-20 bg-white text-black text-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <p className="text-gray-400 mb-3 text-sm">Discover our new cars</p>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight text-[#2d2d2d]">
                    Choose your new <br />
                    car with your desired drivetrain
                </h2>

                {/* Cars Container */}
                <div className="relative flex items-center justify-between w-full h-[250px] md:h-[400px] mt-10">
                    
                    {/* Left Car Container */}
                    <div className="relative w-1/4 h-full hidden md:block">
                        <img src={graySuv} className="absolute right-0 h-full w-auto object-contain drop-shadow-xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-[120%]"></div>
                    </div>

                    {/* Main Center Car */}
                    <img src={blueSuv}
                        className="h-[120%] max-h-[500px] w-auto max-w-full px-4 z-20 object-contain drop-shadow-2xl relative" />

                    {/* Right Car Container */}
                    <div className="relative w-1/4 h-full hidden md:block">
                        <img src={whiteSuv} className="absolute left-0 h-full w-auto object-contain drop-shadow-xl" />
                        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent z-10 w-[120%] -left-[20%]"></div>
                    </div>
                    
                </div>
                
                {/* Details under car */}
                <div className="mt-8 relative z-20">
                    <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">Toyota bZ4X</h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-sm mx-auto">
                        4x2 Electric motor (150kW) <br />
                        drive Combined energy consumption
                    </p>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-6 mt-10">

                    <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>

                    <div className="flex gap-2 items-center">
                        <span className="w-10 h-[2px] bg-gray-200"></span>
                        <span className="w-14 h-[2px] bg-black"></span>
                        <span className="w-10 h-[2px] bg-gray-200"></span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default NewCar;