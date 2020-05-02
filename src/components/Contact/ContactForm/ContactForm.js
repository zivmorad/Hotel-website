import React from 'react';
import './ContactForm.css';

const ContactForm=()=>{
    return(
        <div className='Contact-form'>
            <form>
                <h1><span className='text-primary'>Contact</span> Us</h1>
                <p>Please fill out the form below to contact us</p>
                <div className='form-item'>
                    <label>Name</label>
                    <input type='text'/>
                </div>
                <div className='form-item'>
                    <label>Email</label>
                    <input type='text'/>
                </div>
                <div className='form-message-item'>
                    <label>message</label>
                    <input type='text'/>
                </div>
                <button className='btn-form'>Submit</button>
            </form>

        </div>
    )
}

export default ContactForm;