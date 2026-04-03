import React from 'react';
import AboutHero from './About/AboutHero';
import ServiceCenters from './About/ServiceCenters';
import Contact from './About/Contact';

const About = () => {
    return (
        <div className=''>
            <AboutHero></AboutHero>
            <ServiceCenters></ServiceCenters>
            <Contact></Contact>
        </div>
    );
};

export default About;