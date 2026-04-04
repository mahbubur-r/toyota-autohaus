import React from 'react';
import workshopImg from "../../assets/workshop.png";

const ServiceHero = () => {
    return (
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">

            <img
                src={workshopImg}
                alt="Workshop"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
                <div className="text-white max-w-3xl">
                    <p className="text-sm md:text-base mb-3 text-gray-200">
                        Workshop
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Car Workshop & Service <br />
                        – Your Toyota in the Best Hands
                    </h1>

                </div>
            </div>
        </section>
    );
};

export default ServiceHero;