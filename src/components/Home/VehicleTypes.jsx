import React from 'react';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';
import car5 from '../../assets/car5.png';
import car6 from '../../assets/car6.png';
import car7 from '../../assets/car7.png';
import car8 from '../../assets/car8.png';


const VehicleTypes = () => {
    return (
        <section class="py-16 bg-white text-black">
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-4xl font-bold mb-8">Vehicle type</h2>

                <div class="flex flex-wrap gap-4 mb-12">
                    <button class="bg-red-600 text-black px-6 py-3 font-semibold">SMALL CAR</button>
                    <button class="border px-6 py-3">LIMOUSINE</button>
                    <button class="border px-6 py-3">STATION WAGON / VAN</button>
                    <button class="border px-6 py-3">SUV/OFF-ROAD VEHICLE</button>
                    <button class="border px-6 py-3">SPORTS CAR</button>
                    <button class="border px-6 py-3">CONVERTIBLE</button>
                    <button class="border px-6 py-3">COMMERCIAL VEHICLE / BUS</button>
                </div>


                <div class="grid md:grid-cols-4 gap-10">


                    <div class="text-center border-r border-gray-300 pr-6">
                        <h3 class="font-semibold text-lg mb-4">Aygo X</h3>
                        <img src={car1} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                    <div class="text-center border-r border-gray-300 pr-6">
                        <h3 class="font-semibold text-lg mb-4">YARIS X</h3>
                        <img src={car2} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                    <div class="text-center border-r border-gray-300 pr-6">
                        <h3 class="font-semibold text-lg mb-4">YARIS CROSS</h3>
                        <img src={car3} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                    <div class="text-center">
                        <h3 class="font-semibold text-lg mb-4">COROLLA HATCHBACK</h3>
                        <img src={car4} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>


                    <div class="text-center border-r border-gray-300 pr-6">
                        <h3 class="font-semibold text-lg mb-4">TOYOTA C-HR+</h3>
                        <img src={car5} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                    <div class="text-center border-r border-gray-300 pr-6">
                        <h3 class="font-semibold text-lg mb-4">CAMRY</h3>
                        <img src={car6} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                    <div class="text-center border-r border-gray-300 pr-6">
                        <h3 class="font-semibold text-lg mb-4">PRIUS PLUG-IN</h3>
                        <img src={car7} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                    <div class="text-center">
                        <h3 class="font-semibold text-lg mb-4">MIRAI TOYOTA</h3>
                        <img src={car8} class="mx-auto mb-4" />
                        <button class="flex items-center justify-center gap-2 mx-auto text-sm font-medium">
                            CAR DETAILS
                            <span class="border rounded-full p-1">↗</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VehicleTypes;