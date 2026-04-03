import React from 'react';
import aboutCar from '../../assets/aboutCar.png'

const AboutHero = () => {
    return (
        <div>
            <div className='bg-white text-center'>
                <h3 className='text-4xl text-red-600 font-bold'>About</h3>
                <h1 className='text-5xl md:text-7xl text-black font-bold mt-10'>Location for Toyota Autohaus</h1>
                <img className='w-full max-w-[1440px] h-[300px] md:h-[400px] object-cover mt-[50px] mx-auto' src={aboutCar} alt="About Banner" />
            </div>
        </div>
    );
};

export default AboutHero;