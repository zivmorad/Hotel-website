import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className='nav-form'>
            <div className='link-form'>
                <Link className='link' to='/'>HBT</Link> 
            </div>
            <div className='link-form'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/contact'>Contact</Link> 
            </div>                
        </div>
    )
}

export default Navbar;