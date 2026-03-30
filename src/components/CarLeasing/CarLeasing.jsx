import React from 'react';
import CarLeasingBanner from '../Home/CarLeasingBanner';
import CarLeasingHero from './CarLeasingHero';
import CarLeasingCondition from './CarLeasingCondition';


const CarLeasing = () => {
    return (
        <div>
            
            
            <CarLeasingHero></CarLeasingHero>
            <CarLeasingCondition></CarLeasingCondition>
            <CarLeasingBanner></CarLeasingBanner>
        </div>
    );
};

export default CarLeasing;