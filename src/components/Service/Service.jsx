import React from 'react';
import ServiceHero from './ServiceHero';
import ServiceSection from './ServiceSection';
import CarLeasingBanner from '../Home/CarLeasingBanner';
import PrecisionSection from './PrecisionSection';
import MapSection from './MapSection';


const Service = () => {
    return (
        <div>
           <ServiceHero></ServiceHero>
           <ServiceSection></ServiceSection>
           <PrecisionSection></PrecisionSection>
           <CarLeasingBanner></CarLeasingBanner>
           <MapSection></MapSection>
            
        </div>
    );
};

export default Service;