import React from 'react';
import VehicleTypes from './Home/VehicleTypes';
import Features from './Home/Features';
import NewCar from './Home/NewCar';
import Hero from './Home/Hero';
import FeaturedCars from './Home/FeaturedCars';
import CarLeasingBanner from './Home/CarLeasingBanner';
import FeaturedShowcase from './Home/FeaturedShowcase';
import HotDealsOffers from './Home/HotDealsOffers';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <FeaturedCars></FeaturedCars>
            <VehicleTypes></VehicleTypes>
            <Features></Features>
            <NewCar></NewCar>
            <CarLeasingBanner></CarLeasingBanner>
            <FeaturedShowcase></FeaturedShowcase>
            <HotDealsOffers></HotDealsOffers>
        </div>
    );
};

export default Home;