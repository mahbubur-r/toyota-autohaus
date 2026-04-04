import React from 'react';
import CarDetailsHero from './CarDetailsHero';
import SalesContact from './SalesContact';
import CarDetailsSection from './CarDetailsSection';
import TopVisitingCars from './TopVisitingCars';

const CarDetails = () => {
    return (
        <div className='text-black'>
            <CarDetailsHero></CarDetailsHero>
            <SalesContact></SalesContact>
            <CarDetailsSection></CarDetailsSection>
            <TopVisitingCars></TopVisitingCars>
        </div>
    );
};

export default CarDetails;