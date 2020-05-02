import React from 'react';
import './Reviews.css';
import person1 from '../../../img/person-1.jpg';
import person2 from '../../../img/person-2.jpg';

const Reviews=()=>{
    return(
        <div className='reviews-form'>
            <div className='reviews-container'>
                <h1>What Our Guest Say</h1>
                <div className='review-item'>
                    <img src={person1} alt='error'/>
                    <p>text text text texttext text text text text text text text text text text text text text text texttext text text texttext text text texttexttext text text texttext text text text text text text text text text text text text text text texttext text text texttext text text texttext t text text texttext text text text</p>
                </div>
                <div className='review-item'>
                    <img src={person2} alt='error'/>
                    <p>text text text texttext text text text text text text text text text text text text text text texttext text text texttext text text texttext text text texttext text text text</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;