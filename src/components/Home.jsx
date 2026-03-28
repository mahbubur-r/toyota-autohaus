import React from 'react';
import VehicleTypes from './Home/VehicleTypes';
import Features from './Home/Features';
import NewCar from './Home/NewCar';
import CarLeasing from './Home/CarLeasing';
import Hero from './Home/Hero';
const Home = () => {
    return (
        <div className='border-5 border-green-500'>
            <Hero></Hero>
            <VehicleTypes></VehicleTypes>
            <Features></Features>
            <NewCar></NewCar>
            <CarLeasing></CarLeasing>
        </div>
    );
};

export default Home;