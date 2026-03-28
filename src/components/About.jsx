import React from 'react';
import AboutHero from './About/AboutHero';
import ServiceCenters from './About/ServiceCenters';
import Contact from './About/Contact';

const About = () => {
    return (
        <div className='border-2 border-red-500 '>
            <AboutHero></AboutHero>
            <ServiceCenters></ServiceCenters>
            <Contact></Contact>
        </div>
    );
};

export default About;