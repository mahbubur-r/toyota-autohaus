import React from 'react';
import LeasingHeroCar from '../../assets/LearingHeroCar.png'
const CarLeasingHero = () => {

    return (
        <div>
            <div className='bg-white text-center'>
                <h3 className='text-3xl text-red-600 font-bold pt-5'>Car Leasing</h3>
                <h1 className='text-5xl text-black font-bold mt-10'>Leasing a Toyota in Germany Made Easynpm</h1>
                <img className='w-full mt-10' src={LeasingHeroCar} alt="" />


            </div>
        </div>
    );
};

export default CarLeasingHero;