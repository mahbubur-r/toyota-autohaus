import React from 'react';

const NewCar = () => {
    return (
        <section class="py-20 bg-[#f5f5f5] text-black text-center relative overflow-hidden">
            <div class="max-w-5xl mx-auto px-6">

                <p class="text-gray-400 mb-3">Discover our new cars</p>

                <h2 class="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                    Choose your new <br />
                    car with your desired drivetrain
                </h2>

                <div class="relative flex items-center justify-center">

                    <img src="car-left.png"
                        class="absolute left-0 w-64 opacity-30 hidden md:block" />
                    <img src="car-main.png"
                        class="w-[500px] z-10" />
                    <img src="car-right.png"
                        class="absolute right-0 w-64 opacity-30 hidden md:block" />
                </div>
                <div class="mt-8">
                    <h3 class="text-xl font-semibold mb-2">Toyota bZ4X</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">
                        4x2 Electric motor (150kW) <br />
                        drive Combined energy consumption
                    </p>
                </div>

                <div class="flex items-center justify-center gap-6 mt-8">

                    <button class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800">
                        ←
                    </button>

                    <div class="flex gap-3 items-center">
                        <span class="w-12 h-1 bg-gray-300 rounded"></span>
                        <span class="w-16 h-1 bg-black rounded"></span>
                        <span class="w-12 h-1 bg-gray-300 rounded"></span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default NewCar;