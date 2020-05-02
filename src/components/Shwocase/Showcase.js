import React from 'react';
import './Showcase.css';
import { Link } from 'react-router-dom';

const Showcase=()=>{
    return(
        <div className='showcase-form'>
            <div className='showcase-container'>
                <div className='showcase-content'>
                    <h1><span className='text-primary'>Enjoy</span> Your Stay</h1>
                    <p>text text ext text text text tex text text  text text text text text text text text text text text</p>
                    <Link className='about-page-link' to='/about'>About Our Hotel</Link>
                </div>
            </div>
        </div>
    )
}

export default Showcase;