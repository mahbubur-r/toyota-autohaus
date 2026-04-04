import React from 'react';
import tacomaDesert from '../../assets/tacoma_desert.png';
import bz4xNight from '../../assets/bz4x_night.png';

const FeaturedCars = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="w-full h-[400px] md:h-[500px]">
                    <img src={tacomaDesert} alt="Toyota Tacoma" className="w-full h-full object-cover" />
                </div>

                {/* Text Right */}
                <div className="bg-[#181818] text-white p-10 md:p-16 flex flex-col justify-center">
                    <p className="text-red-500 font-semibold mb-2">Avalon New Car</p>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-4">Toyota Tacoma</h2>
                    <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
                        Explore the open road with our reliable and stylish SUVs, designed for
                        both adventure and comfort. Find your perfect match today!
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 w-fit font-medium flex items-center gap-2 hover:bg-red-700 transition">
                        Learn More <span>&gt;</span>
                    </button>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Text Left */}
                <div className="order-2 md:order-1 bg-[#e40718] text-white p-10 md:p-16 flex flex-col justify-center">
                    <p className="font-semibold mb-2">Corolla New Car</p>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-4">Toyota bZ4X</h2>
                    <p className="max-w-md mb-8 leading-relaxed text-red-100">
                        Discover the perfect blend of comfort and performance with our
                        sedans, designed for city commutes and long drives alike.
                    </p>
                    <button className="bg-white text-red-600 px-8 py-3 w-fit font-medium flex items-center gap-2 hover:bg-gray-100 transition">
                        Learn More <span className="text-red-600 font-bold">&gt;</span>
                    </button>
                </div>

                {/* Image Right */}
                <div className="order-1 md:order-2 w-full h-[400px] md:h-[500px]">
                    <img src={bz4xNight} alt="Toyota bZ4X" className="w-full h-full object-cover" />
                </div>

            </div>
        </section>
    );
};

export default FeaturedCars;
