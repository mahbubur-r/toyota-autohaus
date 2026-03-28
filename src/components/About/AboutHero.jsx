import React from 'react';
import aboutCar from '../../assets/aboutCar.png'

const AboutHero = () => {
    return (
        <div>
            <div className='bg-white text-center'>
                            <h3 className='text-4xl text-red-600 font-bold'>About</h3>
                            <h1 className='text-7xl text-black font-bold mt-10'>Location for Toyota Autohaus</h1>
                            <img className='w-full mt-10' src={aboutCar} alt="" />
                            
            
                        </div>
        </div>
    );
};

export default AboutHero;