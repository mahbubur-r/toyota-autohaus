import React from 'react';
import NewCarHero from './NewCarHero';
import NewCarsType from './NewCarsType';
import NewCarBanner from './NewCarBanner';
import NewCarDetails from './NewCarDetails';

const NewCars = () => {
    return (
        <div>
           <NewCarHero></NewCarHero>
           <NewCarsType></NewCarsType>
           <NewCarBanner></NewCarBanner>
           <NewCarDetails></NewCarDetails>
                                   
        </div>
    );
};

export default NewCars;