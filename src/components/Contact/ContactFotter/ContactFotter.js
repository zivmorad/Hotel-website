import React from 'react'
import './ContactFotter.css'

const ContactFotter=()=>{
    return(
        <div className='fotter-form'>
            <div className='box'>
                <i className="fotter-icon fas fa-phone fa-3x"></i>
                <h3>Phone Number</h3>
                <p>(617)-555-5555</p>
            </div>
            <div className='box'>
                <i className="fotter-icon fas fa-hotel fa-3x"></i>
                <h3>Location</h3>
                <p>50 main st, Boston MA</p>
            </div>
            <div className='box'>
                <i className="fotter-icon fas fa-envelope-square fa-3x"></i>
                <h3>Email Address</h3>
                <p>HotelBT@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactFotter;