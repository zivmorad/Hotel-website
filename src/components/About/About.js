import React from 'react';
import './About.css';
import AboutHeader from './AboutHeader/AboutHeader';
import Reviews from './Reviews/Reviews';

const About =()=>{
    return(
        <div className='about-form'>
            <AboutHeader/>
            <Reviews/>
        </div>
    )
}

export default About;