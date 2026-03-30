import React from 'react';
import UsedCarBanner from './UsedCarBanner';
import UsedCarsList from './UsedCarsList';
import CarLeasingBanner from '../Home/CarLeasingBanner';

const UsedCars = () => {
    return (
        <div>
            <UsedCarBanner></UsedCarBanner>
            <UsedCarsList></UsedCarsList>
            <CarLeasingBanner></CarLeasingBanner>
        </div>
    );
};

export default UsedCars;