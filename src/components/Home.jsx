import React from 'react';
import VehicleTypes from './Home/VehicleTypes';
import Features from './Home/Features';
import NewCar from './Home/NewCar';
import Hero from './Home/Hero';
import CarLeasingBanner from './Home/CarLeasingBanner';
const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <VehicleTypes></VehicleTypes>
            <Features></Features>
            <NewCar></NewCar>
            <CarLeasingBanner></CarLeasingBanner>
        </div>
    );
};

export default Home;